import "dotenv/config";
import { connect } from "mongoose";
import express from "express";
import { DB_URL, PORT } from "./config.js";
import productRouter from "./routes/product.routes.js";

const app = express();
app.use(express.json());

app.use("/api/v1/products", productRouter);
connect(DB_URL)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));
app.listen(PORT, () => {
  console.log("Server has started at port: " + PORT);
});
