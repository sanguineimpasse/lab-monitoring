import express from "express";
import db from "./db.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

export default app;