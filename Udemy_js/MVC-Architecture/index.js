const express = require("express");
const userRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes")
//cors
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(userRoute);
app.use(productRoute);

app.use((req, res, next) => {
  res.status(500).json({
    message: "resourse not found",
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`app is running on the port http://localhost:${port}`);
});
