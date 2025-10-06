import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "started",
  });
});

app.listen(2323, () => {
  console.log("app is listening");
});
