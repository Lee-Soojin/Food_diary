const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 3000 || 3001 || 80;
const axios = require("axios");

const ID_KEY = process.env.REACT_APP_NAVER_CLIENT_ID;
const SECRET_KEY = process.env.REACT_APP_NAVER_CLIENT_SECRET;

app.use(cors());

app.use(bodyParser.json());

app.use("/diary", (req, res) => {
  const word = req.query.query;
  axios
    .get("https://openapi.naver.com/v1/search/api/v1/search/local", {
      params: {
        query: word,
        display: 7,
        start: 1,
        sort: "random",
      },
      headers: {
        "X-Naver-Client-Id": ID_KEY,
        "X-Naver-Client-Secret": SECRET_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then((response) => {
      const items = response.data.items;
      res.send({ items: items });
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
