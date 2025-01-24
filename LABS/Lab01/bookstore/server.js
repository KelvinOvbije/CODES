const http = require("http");
const fs = require("fs")

const app = http.createServer((req, res) => {
  if (req.url === "/") {
    let webpage = fs.readFileSync("./Pages/homepage.html")
    res.end(webpage)

  } else if (req.url === "/homepage") {
    let webpage = fs.readFileSync("./Pages/homepage.html")
    res.end(webpage)
  } else if (req.url === "/about") {
    let webpage = fs.readFileSync("./Pages/aboutme.html")
    res.end(webpage)
  } else if (req.url === "/contact_us") {
    res.end("Contact us today")
  } else if (req.url === "/login") {
  } else if (req.url === "/fetch_data") {
  } 
  else if (req.url === "/pageendfound") {
    let webpage = fs.readFileSync("./Pages/404.html")
    res.end(webpage)
  }
  else {
    res.end(" Error 404 - Page not found");
  }
});

let PORT = 5000;
app.listen(5000, () => {
  console.log(` http://localhost:${PORT}`);
});