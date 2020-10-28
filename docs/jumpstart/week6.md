# Week 6: Advanced Frontend

Hey guess what, you got a working frontend!! Now how do we get some data from the backend? We will 
learn that and more this week.

## React Router

### What is React Router?

### Components used in React Router

### How do we use it?

## Async

## API Specification

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
types of request in a REST structured api. We have a *get* request (gets something from the 
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

