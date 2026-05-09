import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.router.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is listening on port 30000");
});

app.use("/api/user", userRoutes);
