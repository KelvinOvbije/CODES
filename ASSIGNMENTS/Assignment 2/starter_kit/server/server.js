const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRouter = require('./recipes_router');
require('dotenv').config();

const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://Kelvin:KelvinProgress@cluster0.kud0i.mongodb.net/Assignment2DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use('/recipe', recipeRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
