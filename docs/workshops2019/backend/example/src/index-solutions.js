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

app.post("/challenge1", (req, res) => {
  const name = req.body.student;
  axios.get("https://api.myjson.com/bins/lcr7c").then(response => {
    const students = response.data.students;
    for (let i = 0; i < students.length; i++) {
      if (students[i].name === name) {
        res.send({"credits": students[i].credits})
      }
    }
    res.send({"credits": 0})
  })
});


let num = 0;
let add = true;
app.post("/challenge2", (req, res) => {
  const op = req.body.op;
  if (op === "NUM") {
    const newNum = req.body.num;
    if (add) {
      num += newNum
    } else {
      num -= newNum
    }
  } else if (op === "REVERSE") {
    add = !add
  } else {
    res.send("FAILURE");
    return;
  }
  res.send("SUCCESS")
});

app.get("/challenge2", (req, res) => {
  res.send({"num": num})
});



app.post("/challenge3", (req, res) => {
  const from = req.body.from;
  const to = req.body.to;
  axios.get("https://api.myjson.com/bins/ssvzc").then(result => {
    const kids = result.data.kids;
    const nameToFriends = new Map();
    for (let i = 0; i < kids.length; i++) {
      const kid = kids[i];
      nameToFriends.set(kid.name, kid.friends)
    }

    const separation = bfs(from, to, nameToFriends);
    res.send({"separation": separation})
  })
});

const bfs = (from, to, nameToFriends) => {
  const fringe = [];
  const closed = new Set();
  fringe.push({"name": from, "jumps": 0});
  while (fringe.length > 0) {
    const next = fringe.shift();
    if (next.name === to) {
      return next.jumps;
    } else {
      closed.add(next.name);
      for (let i = 0; i < nameToFriends.get(next.name).length; i++) {
        const nextFriend = nameToFriends.get(next.name)[i];
        if (!closed.has(nextFriend)) {
          fringe.push({"name": nextFriend, "jumps": next.jumps + 1})
        }
      }
    }
  }
  return -1;
};

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);