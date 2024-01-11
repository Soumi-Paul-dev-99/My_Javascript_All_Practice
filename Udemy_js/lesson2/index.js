const fs = require("fs");

//for create file
fs.writeFile("demo1.txt", "my name is soumi paul", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfull");
  }
});

//for append file
fs.appendFile("demo1.txt", " hi I am 20 YEARS old", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully");
  }
});

//for read file
fs.readFile("demo1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

//for rename file
fs.rename("demo1.txt", "demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("yup");
  }
});

//delete file
fs.unlink("demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfull");
  }
});

//for file exitence
fs.exists("demo2.txt", (result) => {
  if (result) {
    console.log("found");
  } else {
    console.log("not found");
  }
});
