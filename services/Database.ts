import mongoose from "mongoose";

import { MONGO_URI } from "../config";
import { connectDB } from "../db/connect";

export default async () => {
  try {
    await connectDB(MONGO_URI);
  } catch (err) {
    console.log(err);
  }
};
