const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get("/",(req,res)=>{
//     // const id=req.query.id;
//     // const name=req.query.name;
//     const {id,name} = req.query;
//     res.send(`student name is : ${name} , id is ${id}`)
// })
// app.get("/userId/:id/userAge/:age", (req, res) => {
//   const id = req.params.id;
//   const age = req.params.age;

//   res.send(`<h1>student id is:${id},age is: ${age}</h1>`);
// });

// app.get("/",(req,res)=>{
//     const id = req.header('id');
//     const name = req.header('name');
//     res.send(`<h1>Student id is :${id} name is ${name} </h1>`)
// });

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.post("/register", (req, res) => {
  const fullname = req.body.fullname;
  const age = req.body.age;
  res.send(`your name is ${fullname}, your age is ${age}`);
});

app.post("/user", (req, res) => {
  const name = req.body.name;
  res.send(`welcome ${name}`);
});
app.listen(port, () => {
  console.log(`server running in the port http://localhost:${port}`);
});
