const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const { sampleSize } = require("lodash");

const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now();
    cb(null, uniquePrefix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

const images = [
  "https://picsum.photos/seed/picsum/200/300",
  "https://picsum.photos/id/237/200/300",
  "https://picsum.photos/200/300?grayscale",
];

app.get("/", (req, res) => {
  res.json("Server Running Successfully");
});

app.get("/api/random-images", (req, res) => {
  const randomImages = sampleSize(images, Math.min(3, images.length));
  res.json({ images: randomImages });
});

app.post("/upload", upload.single("dogImage"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  res.json({ filename: req.file.filename });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
