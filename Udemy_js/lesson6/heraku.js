const http = require("http");
const fs = require("fs");
const port = process.env.PORT;

const handleReadFile = (fileName, statuscode, req, res) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

const Server = http.createServer((req, res) => {
  if (req.url === "/") {
    handleReadFile("index.html", 200, req, res);
  } else if (req.url === "/about") {
    handleReadFile("about.html", 200, req, res);
  } else if (req.url === "/contact") {
    handleReadFile("contact.html", 200, req, res);
  }else{
    handleReadFile("404.html",404,req,res)}
});
Server.listen(port, () => {
  console.log(`server is running in the port ${port}`);
});
