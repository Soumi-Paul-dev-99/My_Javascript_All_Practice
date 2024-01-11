require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static("public"));

const middleware = (req, res, next) => {
  console.log("middleware function");

  req.currenttime = new Date(Date.now());
  next();
};
app.use(middleware);

// app.use((req, res, next) => {
//   res.send("404 bad url request");
// });

app.use((err, req, res, next) => {
  res.status(500).send("something broke");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log("i am home  " + req.currenttime);
  // res.send("hello");
});
app.get("/about", (req, res) => {
  console.log("i am about  " + req.currenttime);
  res.send("about me");
});

app.listen(PORT, () => {
  console.log(`server run on http://localhost:${PORT}`);
});
