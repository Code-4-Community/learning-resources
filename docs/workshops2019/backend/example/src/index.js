const express = require("express");
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.get("/", (request, result) => {
  result.send("Hello World")
});

app.post("/handleBody/basic", (req, res) => {
  res.send(req.body.message)
});

app.post("/handleBody/restructure", (req, res) => {
  const responseBody = {
    "response": req.body.message
  };
  res.send(responseBody)
});

app.get("/makeRequest", (req, res) => {
  axios.get("https://api.myjson.com/bins/11m26w").then( response => {
    res.send(response.data.info)
  })
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);