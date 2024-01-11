const express = require("express");
const app = express();
port = 3000;
app.get("/products/:title([a-zA-Z0-9]+)", (req, res) => {
  res.send(`<h2> title = ${req.params.title} </h2>`);
});

app.use("*", (req, res) => {
  res.status(404).send({
    message: "not a valid route",
  });
});
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
