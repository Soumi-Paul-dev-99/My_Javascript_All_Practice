const http = require("http");
const port = 5000;
const hostname = '127.0.0.1';
const server = http.createServer((req,res)=>{
    res.end(" <h1>hello</h1>")
})
server.listen(port,hostname,()=>{
    console.log(`server running on the server http://${hostname} :${port}`)
})