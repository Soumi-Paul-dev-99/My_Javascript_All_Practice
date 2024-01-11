const express = require("express");
const app = express();
const userRouter = require("./routes/usersroute");

app.use("/api/user", userRouter);
app.use("/register", (req, res) => {
  //   res.status(200).json({"name" : "soumi"})
  // res.redirect("/login")
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
});
app.use("/login", (req, res) => {
  // res.send("hi i am login page");
  res.cookie("name", "soumi");
  res.cookie("age", "30");
  res.clearCookie("name");
  res.append("id" , "130000")
  res.end();
});
app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});
app.use((req, res) => {
  res.send("404 !!! Not A valid url");
});
module.exports = app;
