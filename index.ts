import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from "path";

import { AdminRoute, VandorRoute } from "./routes";
import { MONGO_URI } from "./config";
import { connectDB } from "./db/connect";
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "images")));

// app.use("/", (req, res) => {
//   return res.json("Hello from the Food Order Backend");
// });

app.use("/admin", AdminRoute);
app.use("/vandor", VandorRoute);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(port, () => {
      console.log(`App is listening on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
