// const randomFruitsName = require("random-fruits-name");
// console.log(randomFruitsName());

// const MoviesName = require("movies-names");
// console.log(MoviesName.random());

const http = require("http");
const fs = require("fs");
const port = 5000;
const host = "127.0.0.1";
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/contact") {
    fs.readFile("contact.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(port, host, () => {
  console.log(`server running on the host http://${host}:${port}`);
});
