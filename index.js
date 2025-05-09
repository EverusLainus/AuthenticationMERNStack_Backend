import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { authRouter } from "./routes/auth.js";

const app = express();
import cors from "cors";
console.log("connection");
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 3001;

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection success");
  } catch (err) {
    console.log("message : " + err);
  }
};

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log("Server connected");
  connectDB();
});
