import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { AdminRoute, VandorRoute } from "./routes";
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/", (req, res) => {
//   return res.json("Hello from the Food Order Backend");
// });

app.use("/admin", AdminRoute);
app.use("/vandor", VandorRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.clear();
  console.log(`App is listening on ${port}`);
});
