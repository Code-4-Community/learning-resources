# Week 6: Advanced Frontend

Hey guess what, you got a working frontend!! Now how do we get some data from the backend? We will 
learn that and more this week.

## Async

## API Specification
Up to now, we've only been worried about displaying our data. We've never really thought about how or where we get that data from. That's where the API comes in.

API stands for Application Programming Interface. In general, it refers to any way of programmatically communicating with another application. In the context of web development, API usually refers to the connection between our frontend and our backend.

The good thing about a completely separate frontend and backend is that we don't need to know anything about how our backend works to be able to communicate with it. The API just defines several commands we can use and the responses we can expect to receive -- we don't care how or where the backend gets it data. (If you've learned Java, this might remind you of an `interface`. That's basically what it is.)

An API specification just refers to the definition of this interface. It tells us, in very precise terms, the following things:

1. The different commands we can send to the backend
2. What inputs those commands need so that the backend can make sense of them
3. What, if anything, we should receive as a response to each command we send

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

## JEST

## Other Resources
