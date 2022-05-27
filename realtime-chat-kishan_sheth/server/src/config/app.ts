import cors from "cors";
import express from "express";
import mongoose from "mongoose";

const app = express()


app.use(cors())
app.use(express.json())
const mongoUrl = process.env.MONGO_URL

if (!mongoUrl) throw Error("Have not MONGO_URL on .env file")


mongoose.connect('mongodb://localhost:27018/chat', {})
  .then(() => console.log("Conected to the mongodb"))
  .catch(e => console.log(e))

export default app

