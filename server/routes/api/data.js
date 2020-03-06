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
        date: element.date,
        links: element.links,
        images: element.images,
        category: element.category,
        body: element.body,
        keywords: element.keywords
      });
    })
  );
});

//add element route
router.post("/", (req, res) => {
  const newElement = {
    id: helper.getNewId(),
    title: req.body.title,
    date: req.body.date,
    links: req.body.links,
    images: req.body.images,
    category: req.body.category,
    body: req.body.body,
    keywords: req.body.keywords
  };
  data.push(newElement); //pushes new element into an existing array
  helper.writeJSONFile(dataFile, data); //writes new array of elements to JSON
  res.json(data); //return a new array of elements
});

module.exports = router;
