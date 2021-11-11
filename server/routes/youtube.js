var express = require("express");
var router = express.Router();

const { google } = require("googleapis");

const API_KEY = process.env.GOOGLE_KEY;
const MAX = 10;

router.get("/:query", function (req, res, next) {

  google
    .youtube("v3")
    .search.list({
      key: API_KEY,
      part: "snippet",
      q: req.params.query,
      maxResults: MAX,
    })
    .then((responce) => {
      res.status(200).send(responce);
    })
    .catch((e) => {
      res.status(e.code).send("Error message");

    });
});



module.exports = router;
