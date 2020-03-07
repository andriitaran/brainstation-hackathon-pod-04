const express = require("express");
const router = express.Router();
const helper = require("../../helper/helper");

const dataFile = __dirname + "/../../models/data.json";
const data = require(dataFile);

//route for getting data
router.get("/", (req, res) => {
  return res.send(
    data.map(element => {
      return (element = {
        id: element.id,
        title: element.title,
        category: element.category,
        date: element.date,
        links: element.links,
        mash: element.links,
        images: element.images,
        videos: element.videos,
        body: element.body
      });
    })
  );
});

//add element route
router.post("/", (req, res) => {
  const newElement = {
    id: helper.getNewId(),
    title: req.body.title,
    category: req.body.category,
    date: Date.now(),
    links: req.body.links,
    mash: req.body.links,
    images: req.body.images,
    video: req.body.video,
    body: req.body.body
  };
  data.push(newElement); //pushes new element into an existing array
  helper.writeJSONFile(dataFile, data); //writes new array of elements to JSON
  res.json(data); //return a new array of elements
});

module.exports = router;
