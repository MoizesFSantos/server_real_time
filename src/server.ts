import "reflect-metadata";
import express from "express";

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8899;

app.listen(PORT, ()=> console.log(`Server is running at ${PORT}`));