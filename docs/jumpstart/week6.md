# Week 6: Advanced Frontend

Hey guess what, you got a working frontend!! Now how do we get some data from the backend? We will 
learn that and more this week.

## React Router

### What is React Router?

### Components used in React Router

### How do we use it?

## Async
Javascript is a fundamentally synchronous language. This means that all of its commands are executed one after another.

But this raises an issue. Let's say we want to do something that takes a significant amount of time (orders of magnitude longer than it takes to execute a line of code). For example, imagine we wanted to get information from another resource on the internet. Because of physical limitations (the time it takes for data to travel through wires that connect the web), this request will take thousands of times longer to execute than a normal line of code. This is an issue because we don't want our program to simply freeze while this execution is happening -- we want the rest of our code to continue executing in the background.

The solution is asynchronous Javascript. Instead of completely pausing our code, `async` enables us to "wait it out." This gives us the corresponding keyword, `await`. Let's see how they can be used together.

Let's say we're using a library that has an asynchronous `request()` function, and we wanted to get some response from it. Here's our first attempt:

```
const response = request('https://someresource.com');
console.log(response);
```

If we ran this code, `undefined` would appear in the console, even though the request we're trying to make should return data. This is because Javascript will just keep executing code, without awaiting the results of any asynchronous calls. So, the `console.log()` line will be called instantaneously after the `request()` line, so the response will still be undefined -- the request has not yet been received.

To fix this, we use the `await` keyword:

```
const response = await request('https://someresource.com');
console.log(response);
```

Now, the console should correctly log the response. This works because Javascript will wait for our request to complete before moving on to the next line.

So where does `async` come in? Imagine further that we defined a function that wrapped this request:

```
function getResponse() {
    const response = await request('https://someresource.com');
    return response.data;
}
```

If we try to compile this code, we'll get an error: <em>await is only valid in async function</em>. This makes sense: if our `getResponse()` function isn't asynchronous itself, then it won't be able to fully execute because it contains asynchronous calls within it. So, any function that contains `await` must be declared `async`, like this:

```
async function getResponse() {
    ...
}
```

Now, we must use `await` to call `getResponse()` because it is asynchronous. 

You may worry that this will ultimately make all our code asynchronous because only asynchronous functions can use `await`. Fortunately, we can still call asynchronous functions inside synchronous ones:

```
function doSomething() {
    getResponse();
}
```

This <em>will</em> still call `getResponse()`, even though it's `async`. It just won't wait for the call to return a value.

## API Specification
Up to now, we've only been worried about displaying our data. We've never really thought about how or where we get that data from. That's where the API comes in.

API stands for Application Programming Interface. In general, it refers to any way of programmatically communicating with another application. In the context of web development, API usually refers to the connection between our frontend and our backend.

The good thing about a completely separate frontend and backend is that we don't need to know anything about how our backend works to be able to communicate with it. The API just defines several commands we can use and the responses we can expect to receive -- we don't care how or where the backend gets it data. (If you've learned Java, this might remind you of an `interface`. That's basically what it is.)

An API specification just refers to the definition of this interface. It tells us, in very precise terms, the following things:

1. The different commands we can send to the backend
2. What inputs those commands need so that the backend can make sense of them
3. What, if anything, we should expect to receive as a response to each command we send

We'll start with the first two.

####The request
Commands sent over the internet are usually referred to as <em>requests</em>. (You may hear them referred to as HTTP requests -- HTTP here just refers to the protocol used, and it's not really important to us.)

First, every request has a <em>method</em>. The method doesn't change anything fundamental about the request -- it just tells us more about its nature. For example, a `GET` request is normally used to get some resource or data. `POST` is generally used to create data, and `DELETE` to delete. For now, there are only five methods we'll need to know about:

- `GET`
- `POST`
- `DELETE`
- `PUT` - used to replace a resource
- `PATCH` - used to modify a resource

Next, every request has a URL, or Uniform Resource Locator. This just points to some place on the internet. If our API is hosted at https://api.mywebsite.com/, then all of our requests will begin with this URL -- this is often called a base URL. From here, our API spec will define different paths that map to various commands. 

For example, we might have a `GET` request to https://api.mywebsite.com/comments which retrieves comments. Or, we might have a `DELETE` request to https://api.mywebsite.com/comments that deletes a particular comment. We might also have a `POST` request to https://api.mywebsite.com/authors that creates an author. Notice that changing the method makes the request completely different! In other words, a request is uniquely identified by two things: its method and its URL. Changing either completely changes the command that you're asking the backend to perform.

Next, we have different inputs that a request can take to get some more information from the client (our frontend). First are URL parameters. URL parameters are just strings of text (or numbers) that we can insert into our URL to send important data, like ids. For example, an API specification might list this request:

`GET /comments/:id`

(We've ommitted the base URL, as most API specs do, because it's implicit.)

This request probably gets the comment with the given id. We know that id is a parameter because of the colon (:) in front of it. So, when we send the request, how do we also send this id? Easy -- we just replace :id with the actual id, like this:

`GET /comments/42` gets the comment with id 42.

Note that request parameters are required. `GET /comments` is a completely different request from `GET /comments/42`, because the former matches `GET /comments`, whereas the latter matches `GET /comments/:id`. (A request can only match one specification.)

We can also have multiple params, like this: `GET /articles/:year/:authorId`. 

But this may get a bit unwieldy if we have a lot of parameters, and especially if those parameters are arrays or objects. It's infeasible to send complex data structures over plaintext. For example, imagine you wanted to `POST` a new article, with `name`, `author`, `tags`, and `text`, where `tags` is an array of strings. Sending this using URL params would quickly become unmanageable. 

The solution to this problem is the request <em>body</em>. Like params, a body is not essential to a request. (In fact, GET requests cannot have a body.) A request body can really be any kind of textual data, but many APIs (including ours) will communicate using JSON, JavaScript Object Notation. JSON allows us to sent our familiar Javascript objects and arrays in our request body, so we could `POST` a new article more easily:

```
{
    "name": "How to Write an API",
    "author": "C4C Jumpstart",
    "tags": ["education", "web dev"],
    "text": "...text as long as you want..."
}
```

(Notice that the body is one object, so it's wrapped in curly brackets.)

Once our backend receives this request, it will be able to easily parse the JSON.

####The response
Now we know how to send requests. Fortunately, the response is much easier, because it only contains two important things (for our purposes): a status and a body.

The status is just an integer that tells us what the API did with the request. For example, a response of 200 literally means "OK" -- everything went fine. Or, a server might return the infamous 404 if a requested resource was not found. In general, 200-level responses are good and expected; 400 level responses are caused by client error (like bad inputs), and 500-level responses are caused by server errors. You can read more about HTTP responses [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

The body, like in the request, is entirely optional. Fortunately, our API spec will tell us if we should expect the server to respond with a body or not, and if it does, what it should contain. For example, if we `GET` comments, the response body might look like this:

```
{
    comments: [
        {
            "name": "jjones",
            "content": "What's up everyone!",
        },
        {
            "name": "msmith",
            "content": "Wow, this was really helpful."
        }
    ]
}
```

(Again, like request bodies, the response body is one object, so it's wrapped in curly brackets.)

With this, we know all the fundamental components that make up an API request and response.

## Axios

Weird name right? Do not worry, it is a lot easier than it sounds.

### What is Axios

Axios is an open source library that allows us to easily make HTTP requests. There are built in ways
to make HTTP requests in Javascript, but axios is better. Axios is better because that is the 
way things are. In our project, we need to use axios to fetch data from our backend so that we 
can display it on the beautiful frontend that was made.

### Promises

Promises are not specific to axios, but it is fundamental that we understand what they are
since it is what allows us to perform asynchronous queries for information.

Promises are a way for us to deal with return values for asynchronous actions. By definition, 
a promise is an object that may produce a single value some time in the future: either a 
resolved value, or a reason that it’s not resolved (e.g., a network error occurred). We deal with
the result of the promise by "resolving it" with `.then()`. We put a callback function (anonymous 
function usually) in the `.then()` to handle what the promsie returned.

> Promises are not lazy, meaning they will start doing their operation as soon as you create it.

##### Promise States
There are 3 different states that a promise can be in. They are:
- Fulfilled
- Rejected
- Pending

*Fulfilled* means that the promise operation returned successfully. *Rejected* means that the 
promise operation failed. *Pending* is the state a promise is in while it waits for the operation
to be completed (we do not know if it was successful or not).

> All of your promises should have a `.then()` after them to resolve the promise whether it
>failed or succeeded. 

### AxiosInstance

We are going to be following proper practice. By proper practice, I mean what Jack Blanc said was
proper practice. The first step to making an axios request is to first create an instance of axios
that we can base all of our calls off of. This is not necessary for making an axios request, but it
is more informative and allows us to control our requests more. Our instance is going to be super 
simple. Here it is:

```
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosInstance;
``` 

Let's take a look at what all of this means. We first start by importing axios like we would any
other outside package. Next, we make a constant using `.create()` in axios. All this does is allow
us to create a custom configuration for our axios. We specify the *baseURL*, which is the url axios
bases all requests off of. Then we set a *timeout*, which gives the request 5000 milliseconds (or 
5 seconds) to respond. If no response is made then we fail the promise. The last part of our custom
configuration is specifying that we want our request to be returned in JSON format. 

> JSON stands for Javascript Object Notation. It is just a to standardize a file format for
>web requests (although JSON files are not specific to the web). JSON allows us to store a "human-
>readable" version of our objects in an attribute-value pair.

### Creating Requests

Now that we set up our AxiosInstance, we can use that instance to formulate requests to our backend.
Let's just jump right into it! As you may have recalled from the previous weeks, there are four 
basic types of request in a REST structured api. We have a *get* request (gets something from the 
backend), a *post* request (adds something to backend), *put* request (updating something from the 
backend) and *delete* request (removes something from the backend). 

> Quick: do we need all four of these requests for our blog (note we are not supporting changing
>a blog post or comment after it is made)?

For our site, we do not need
to make a put request because we do not need to update any information, however we will be making
get, post, and delete requests.

We will now use the AxiosInstance we created in a file called AxiosInstance.tsx in our api file
we will call api.tsx. Here is what the first part of the file will look like:

```
import AxiosInstance from './AxiosInstance';
import { 
    Post, 
    Comments,
    CreatePost,
    BlogPost,
    CreateComment
} from '../Types';

const POSTS = "/posts";

//more things below this
``` 

We start by importing our AxiosInstance we made. Then we want to import our types so that we can 
use the types to type our axios requests. Lastly, we make a constant called `POSTS`, which is just
a short and constant way of saying the "/posts". "/posts" is a location we will use when requesting
information. Having a constant of part of the location will save us time.


##### Get Request

What can we use a get request for? That's right, getting our posts and comments. Let's look at how
to get posts. We want to have a way to get one post, and a way to get all the posts currently in
the backend. Here is how to make a get request: 

```
export const getAllPosts = async (): Promise<Post[]> => AxiosInstance.get(`${POSTS}`).then((response) => response.data.posts);
```

Let's go through what this all means together. First, we make a constant that is going to be
assigned to an anonymous asynchronous function. The function is then going to make a get request
using our `AxiosInstance` we created previously. `.get()` requires one argument, which is the url
to make the get request at. As you recalled, the `AxiosInstance` already has our baseURL to our
backend so all we need is to go to that url plus "/posts", which we can use the constant we 
described. We follow up all of our get requests with `.then()` in order to break down the response
into the data we are requesting. To do this we make an anonymous function that takes in a response
(what the promise returned) and then dissects the response to what we want.

Here is another get request example:

```
export const getPost = async (id: number): Promise<BlogPost> => AxiosInstance.get(`${POSTS}/${id}`).then((response) => response.data);
```

##### Post Request

##### Delete Request

### Calling Requests in our application

## JEST

## Other Resources

- [Axios](https://www.npmjs.com/package/axios)
- [React Router](https://www.freecodecamp.org/news/a-complete-beginners-guide-to-react-router-include-router-hooks/)
- [JEST](https://jestjs.io/)

