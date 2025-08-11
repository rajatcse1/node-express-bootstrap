import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("Hello from server");
});

// routes

export default app;
