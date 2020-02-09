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
  axios.get("https://api.myjson.com/bins/9p36g").then( response => {
    res.send(response.data.info)
  })
});


app.get("/", (request, result) => {
  result.send("Hello World")
});


app.post("/challenge1", (req, res) => {
  // Call req.body.student to get a name String
  // Make a request to myjson
  // Parse the JSON that was responded to get the credits of req.body.student
  // Call res.send({"credits": INTEGER})

  const student = req.body.student;
  axios.get("https://api.myjson.com/bins/lcr7c").then(response => {
    const studentList = response.data.students;
    for (let i = 0; i < studentList.length; i++) {
      const studentObject = studentList[i];
      if (studentObject.name === student) {
        res.send({"credits": studentObject.credits})
      }
    }
    res.send({"credits": 0})
  })
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);