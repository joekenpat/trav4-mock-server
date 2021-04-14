import chalk from "chalk";
import express from "express";
import MockData from "./MockData.js";
const app = express();
const port = 3000;
const db = new MockData();

app.get("/section/:sectionId", (req, res) => {
  const sectionId = req.params.sectionId;
  if (!db._validateSectionId(sectionId)) {
    const notFound = {
      status: "error",
      message: "Invalid Section Id!",
    };
    res.status(404).json(notFound);
  } else {
    const data = {
      status: "success",
      message: `Section: ${sectionId} found!`,
      data: db.allContentBySectionId(sectionId),
    };
    res.status(200).json(data);
  }
});

app.get("/section/:sectionId/content/:contentId", (req, res) => {
  const sectionId = req.params.sectionId;
  const contentId = req.params.contentId;
  if (!db._validateSectionId(sectionId)) {
    const notFound = {
      status: "error",
      message: "Invalid SectionId!",
    };
    res.status(404).json(notFound);
  } else if (!db._validateContentId(sectionId, contentId)) {
    const notFound = {
      status: "error",
      message: `Invalid Content Id for Section: ${sectionId}!`,
    };
    res.status(404).json(notFound);
  } else {
    const data = {
      status: "success",
      message: `Content: ${contentId} for Section: ${sectionId}, found!`,
      data: db.contentBySectionIdAndContentId(sectionId, contentId),
    };
    res.status(200).json(data);
  }
});

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
