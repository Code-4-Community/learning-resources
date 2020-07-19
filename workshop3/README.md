# Intro To Backend Development and APIs


### Installations

- Node: https://nodejs.org/en/download/
    - Node is used to create and run our backend as well as manage all the libraries we will use

- Postman: https://www.postman.com/downloads/
    - Postman is a great tool for testing HTTP requests and responses
    
### Getting Started

Open the terminal application and check that node is installed correctly by running: 

```shell script
node --version
```

Create a new directory somewhere with a name of your choice then navigate in the terminal to that directory.

```shell script
cd ~/Desktop
mkdir backendexample
cd backendexample
```

Initialize your node project with the following command. You can leave all the default settings or change whatever you want.

```shell script
npm init
```

Download the following 3 libraries, do not type the `#` symbol or anything after it.

```shell script
npm install express # For creating our backend logic
npm install body-parser # For handling JSON request bodies
npm install axios # For making our own HTTP requests
```

Node should have generated a file called `package.json` in your current directory. Open that file and under where it says "scripts" add the start command so that it looks like:

```json
{
  "main": "index.js",
  "scripts": {
    "start": "node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": []
}
```

Create a directory called `src` within your current directory and within create a file called `index.js`. (Note that these are normal naming conventions but can be replaced with anything)

```shell script
mkdir src
cd src
touch index.js
```

Fill index.js with the following starter code that showcases returning simple data, handling a request's body, and making our own HTTP request.

```js
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
```

### Test your Backend

To start your app, from the terminal in the outer directory you created (not `src`), run the following command. You should see it output "Example app listening on port 3000!".

```shell script
npm start
```

Now, open Postman. Make a new request that is a GET request to the following url: `http://localhost:3000/`. You should get a response that says "Hello World".

If you want to make a POST request, first change the method to the left of the url. Then, under the url, go to the "body" tab, select "raw" input and from the dropdown select "JSON (application/json)".

If you want to try fetching your own data with an HTTP request in your backend, you can create an endpoint that will return your JSON data at the website: `http://myjson.com/`.

If you make any changes to your app, make sure to restart your application from the command line. Hit "ctrl-c" to stop the current process then rerun the command `npm start`.

### Challenges

#### 1.

Expose a POST endpoint that takes a JSON body of the following form:
 
 ```json
{
  "student": STRING
}
```

The route will make a HTTP GET request to the following endpoint: `https://api.myjson.com/bins/lcr7c` that returns this JSON data:

```json
{
    "students": [
        {
            "name": "Dan",
            "credits": 4
        },
        {
            "name": "Joe",
            "credits": 2
        },
        {
            "name": "Amy",
            "credits": 9
        },
        {
            "name": "Kyle",
            "credits": 11
        },
        {
            "name": "Emma",
            "credits": 12
        },
        {
            "name": "Phil",
            "credits": 5
        }
    ]
}
```

You should return JSON data of the following form where credits is the number of credits that student has taken. If the given name is not one of the defined students return 0.

```json
{
  "credits": INT
}
```

#### 2.

Expose a GET endpoint and a POST endpoint. The POST endpoint should take JSON of the following form:

```json
{
  "op": "NUM" | "REVERSE",
  "num": INT
}
```

Using a variable that starts at 0. Every time you receive a POST request with "NUM" you should add the integer in "num" to the variable. If you receive a "REVERSE" POST request, then every subsequent "NUM" request you should subtract the number from the variable until you receive a second "REVERSE" request.

Your POST endpoint should return "SUCCESS" if the op was one of "NUM" or "REVERSE" and return "FAILURE" otherwise.

Your GET endpoint should return the current number in the following JSON body:

```json
{
  "num": INT
}
```

#### 3.

For this problem you will expose a POST endpoint with the following JSON body:

```json
{
  "from": STRING,
  "to": STRING
}
```

This will return a body of the form:

```json
{
  "separation": INT
}
```

Your endpoint will make a GET request to the following endpoint: `https://api.myjson.com/bins/ssvzc`. This will return this JSON:

```json
{
    "kids": [
        {
            "name": "Dan",
            "friends": [
                "George",
                "Richard"
            ]
        },
        {
            "name": "George",
            "friends": [
                "Dan",
                "Ashley"
            ]
        },
        {
            "name": "Ashley",
            "friends": [
                "George",
                "Tammy",
                "Amber",
                "Phil"
            ]
        },
        {
            "name": "Tammy",
            "friends": [
                "Ashley",
                "Phil"
            ]
        },
        {
            "name": "Amber",
            "friends": [
                "Ashley"
            ]
        },
        {
            "name": "Phil",
            "friends": [
                "Ashley",
                "Tammy",
                "Amy"
            ]
        },
        {
            "name": "Joe",
            "friends": [
                "Max"
            ]
        },
        {
            "name": "Max",
            "friends": [
                "Joe"
            ]
        },
        {
            "name": "Zach",
            "friends": []
        },
        {
            "name": "Amy",
            "friends": [
                "Phil",
                "Richard"
            ]
        },
        {
            "name": "Richard",
            "friends": [
                "Amy",
                "Dan"
            ]
        }
    ]
}
```

Your endpoint takes in the names of two people in the JSON. It will return the minimum friendship separation between the two names. If either of the two names is not in the "kids" list or they have no connection between friends then separation will be `-1`.

For example:

"Dan" and "Amy" have a separation of 2.

"Dan" and "George" have a separation of 1.

"Zach" and "Zach" have a separation of 0.

"Amber" and "Joe" have a separation of -1.


### Solutions

#### 1.

```js
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
```

#### 2.

```js
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
```


#### 3.

```js
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
```
