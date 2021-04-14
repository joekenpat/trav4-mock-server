import chalk from "chalk";
import express from "express";
import MockData from "./MockData.js";
const app = express();
const port = 3000;
const db = new MockData();

app.use(function (req, res) {
  res.status(404).json({
    message:
      "Ohh you are lost, read the API documentation to find your way back home :)",
  });
});

app.listen(port, () => {
  console.log(
    chalk.green(`[success] Server Started at:  http://localhost:${port}`)
  );
});
