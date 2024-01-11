const express = require("express");
const bodyParser = require("body-parser");
const server = require("./server");
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.post("/triangle", (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const area = 0.5 * base * height;
  res.send(`<h2>Area of triangle is :${area}</h2>`);
});

app.post("/circle", (req, res) => {
  const radius = req.body.radius;

  const area = Math.PI * radius * radius;
  res.send(`<h2>Area of circle is :${area}</h2>`);
});

app.listen(port, () => {
  console.log(`connection successfull in the port http://localhost:${port}`);
});
