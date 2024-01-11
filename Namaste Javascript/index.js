const hello = "hello world";
console.log(hello)


const fs = require("fs");
const textIn=fs.readFileSync("./input1.txt","utf-8");
console.log(textIn);

const textout =`this is unable to read the file system ${textIn}.\n crated on ${Date.now()}`;
fs.writeFileSync("./textout.txt",textout);
console.log("file writtten")