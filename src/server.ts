import "reflect-metadata";
import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8899;

app.listen(PORT, ()=> console.log(`Server is running at ${PORT}`));