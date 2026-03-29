import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

console.log(process.env.PORT);
console.log(process.env.DB_URL);

app.get("/",(req, res)=>{
    res.status(200).json({ msg: "success from backend 12345678" });
});

app.listen(3000,() => console.log ("server is running on port 3000"));
