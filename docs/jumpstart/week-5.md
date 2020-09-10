# Week 5: Server, Request, and Backend Basics

## Agenda
- Server Basics
    - What is a Server
    - What is a Client
    - Importance of a Clear Server/Client Interface and 
    - Hosting and Localhost
- HTTP/REST Basics
    - What is HTTP
    - Status Codes Overview
    - Request Types
    - JSON
- Backend Basics and GET Requests
    - Idea of Routing on the Backend
        - How to Make a New Route
        - Static Routing
        - Route Params
    - Using Postman to Hit Up APIs
    
## Basic Plan
1. Servers
    - What is a server?
    - What is a client?
    - Importance of communication
    - Hosting
        - IP Addresses
        - Localhost
        - Ports
        - Ngrok
2. HTTP Requests and REST
    - What is HTTP
        - Status Codes in HTTP
            - Informational Responses
            - Successful Responses
            - Redirect Responses
            - Client Errors
            - Server Errors
        - JSONs
            - Values
            - Arrays
            - Objects
        - Request types overview
            - GET
    - What is REST (REpresentational State Transfer)
    - Postman and API clients
3. Routing on the Backend
    - Structure of the Backend
    - What is routing?
    - Routing with Vert.x
        - Static routing
        - Route parameters
        - Query parameters
        - Creating a Sub-Router
    - Processor Interfaces
    
## Servers

The server-client architecture is the way that the web works. In a simple explanation, servers are programs which
await requests sent by client programs (like web browsers), and the requests are processed so that a response can 
be returned.

![Server-client architecture model](img/server-client-model.png)

*Gnome-fs-client.svg: David Vignoni Gnome-fs-server.svg: David Vignoni derivative work: Calimo 
/ LGPL (http://www.gnu.org/licenses/lgpl.html)*

### What is a server?

Servers are the programs which power every website and remote service you use. In a somewhat simplified way, they
are usually just programs that are always-on and listening whose purpose is to run remote operations 
for you. They handle incoming and outgoing requests, errors, and running functionality you design! They can be run for 
programs that you use locally as well as remote. 

As an example, when you play video games with other people, that's spinning up a server that handles running everyone's 
game and the interactions that may happen between each player and AI.

### What is a client?

A client is a program that makes requests to servers. Servers can end up having client functionality if they need to 
interact with other servers, but in a lot of cases, they can just be standalone programs too.

From the example of the game above, the client side of that would be the part of the game that you interact with and 
download locally, which ends up sending requests to the (usually remote) server. Another example of a client could be 
your web browser, which sends requests when you try to load websites or send information.

### Importance of communication

As you can imagine, with separate programs for the server and client, the interactions need to be carefully planned. 
If, for example, you end up sending data to the server from a client, but your data is missing information or is sent
in a way that is not expected (which is a surprisingly easy problem to run into), you will encounter errors. If this 
occurs, then depending on the processes you or your company use for development, going back and fixing this can end up
causing other errors or end up taking valuable time in possibly unplanned work.

### Hosting

Hosting is the act of starting a server and making available a resource for connections. These connections are usually 
accessible by addresses and IP addresses.

#### IP Addresses

An IP address is an identification number assigned to every device in a computer network which uses the Internet 
Protocol (IP) to communicate and relay information. In most cases, IPv4 (the fourth version) addresses are used, which
usually look like four numbers from 0-255 separated by periods. A couple examples are `192.168.0.1`, `127.0.0.1`, 
`255.255.255.255`, and `8.8.8.8` (This one is actually Google! Try going to [https://8.8.8.8](https://8.8.8.8)). If you
want to see your own IP, try out a [what is my IP website](https://whatismyipaddress.com/).

Often, when you navigate to a website by typing in a name, like [https://c4cneu.com](c4cneu.com), special service called
the Domain Name Service (DNS) translates that text into an IP address. If you're interested, check out the [How Stuff 
Works page](https://computer.howstuffworks.com/dns.htm) on it, but here's a simple image to demonstrate.

![How a DNS lookup works](img/how-dns-works.png)

*How Stuff Works*

#### Localhost

Localhost (or http://127.0.0.1) is the address that locally hosted servers can be accessed at. If you want to access 
something hosted locally, all you have to do is load that `http://127.0.0.1` address or `http://localhost`. Localhost
is actually a 'loopback address', which means that any requests sent to it are routed back to the computer itself, but
for simplicity's sake, you can just think of it as a really quick and simple way to write this computer's address. 
You'll be using this a lot later on when you're running your website locally, but there's one more thing you'll have to 
learn about before then.

#### Ports

A port is an individual endpoint at a specific address. Each program that wants to act as a server reserves a port
to be used throughout its lifespan, and no two programs can share the same port since these ports act as a sort of 
address for the server. They can range from 0 to 65535, and the ones ranging from 0 to 1024 are commonly referred to as
the [well-known port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports). These 
include special commonly used things such as the [File Transfer Protocol (FTP, ports 20 and 
21)](https://en.wikipedia.org/wiki/File_Transfer_Protocol), [Secure Shell (SSH, port 22)](https://www.ssh.com/ssh/),
[Simple Mail Transfer Protocol (SMTP, port 25)](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) (a protocol
for sending email), DNS (port 53), (unencrypted) [Hyper Text Transfer Protocol (HTTP, port 
80)](https://developer.mozilla.org/en-US/docs/Web/HTTP), (encrypted) [HTTP Secure (HTTPS, port 
443)](https://developer.mozilla.org/en-US/docs/Glossary/https). When writing about ports, they can be written as either 
"3000" or ":3000" (with the prefixed ":").

HTTP/HTTPS is how websites are usually served, but 
since those ports are often reserved by our operating system, and since we're not running this in production, it's not
worth the effort to try and fix that. You'll see that it's common to run programs on ports outside of the well known
port range, and ports :3000, :8000, and :8081 (what we'll be using) are quite common. Also, when testing locally,
HTTPS is usually not used since a certificate has to be created, so just focus on using HTTP for now. We'll talk about
HTTP more later.

To access a port at a given address, you write the protocol (optional, http is assumed by default), followed by the 
address, followed by the colon-prefixed port. So for example, accessing http on port :4000 locally would look something
like `http://localhost:4000` or `http://127.0.0.1:4000`.

#### Ngrok

When you're hosting on localhost, it's often not easy for someone on a different network or even the same network to
see the progress you've made and access your app. This is because of a bunch of firewall rules in place, and to fix that
you will end up having to look into to port-forward your application or messing with those firewall rules. An easy way
to get around that is to look into [Ngrok](https://ngrok.com/), which ends up forwarding traffic through one of their 
servers for your local app and avoids having to deal with those rules. So if you want to show your friends and family,
download it and check out their [docs](https://ngrok.com/docs). It's really easy and extremely useful!

## HTTP Requests and REST

### What is HTTP

Hypertext Transfer Protocol (HTTP) is a protocol for requests and responses in a server-client architecture model. In
the web browser example from earlier, the client's request to the server is an HTTP request, and the server provides an
HTTP response in the form of actions and resources like HTML files. 

HTTP provides a few useful items of information we'll be using such as headers in both requests and responses, which 
provide metadata about the request or response, bodies, which contain the actual information to be transferred if any, 
and status codes, which let you know if any actions were performed, errors occurred, and what the response means.

#### Status Codes in HTTP

Status codes are special numerical codes returned in an HTTP response which indicate the status of the request. There 
are a couple groups of status codes, which define a high level meaning as to what happened during the server.

| Code Range | Description |
| :--- | :--- |
| 100 - 199 | Informational Responses |
| 200 - 299 | Successful Responses |
| 300 - 399 | Redirect Responses |
| 400 - 499 | Client Errors |
| 500 - 599 | Server Errors |

For more info on the responses outside of what's below, check out [MDN's HTTP Status Code 
Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) or the [API REST Tutorial 
Cheat Sheet](https://www.restapitutorial.com/httpstatuscodes.html).

You can also see a lot of these if you open up your browser's developer console and look at the network tab. This 
network tab can give you information about exactly what's going on when you try to load a webpage. Try it out!

##### Informational Responses

Informational responses are mostly responses that are used as low-level networking responses. In 99% of cases, you will
not have to deal with these. 

Here are a few of the most common ones:

| Code | Name | Description |
| :--- | :--- | :--- |
| 100 | Continue | Everything is OK so far and the request should be continued (or ignored if already finished) |
| 101 | Switching Protocol | A response to an `Upgrade` request which returns the protocol the server is switching to |

##### Successful Responses

Successful responses are responses that indicate success for whatever request was made. The specific response indicates
exactly what kind of success was achieved.

Here are a few of the common ones:

| Code | Name | Description |
| :--- | :--- | :--- |
| 200 | OK | The most common one, indicates that requested resource is in or described in the body |
| 201 | Created | A new resource has been created on the server |
| 204 | No Content | The request was a success but no body was returned (necessary data *might* be in the headers) |

##### Redirect Responses

Indicates that a resource has been moved or that the client should instead go to a different location.

Here are a few of the common ones:

| Code | Name | Description |
| :--- | :--- | :--- |
| 301 | Moved Permanently | The URL has been changed **permanently** and is provided in the response |
| 302 | Found | The URL has been changed **temporarily** and might be changed again in the future (so keep using this to find it) | 

##### Client Errors

These represent errors that a client has made and are used to let it know what went wrong.

Here are a few of the common ones:

| Code | Name | Description |
| :--- | :--- | :--- |
| 400 | Bad Request | There was an issue with the request (usually due to invalid syntax) | 
| 401 | Unauthorized | The client needs to authenticate (log in) before using this resource |
| 403 | Forbidden | The client is authorized, but doesn't have the right permissions |
| 404 | Not Found | The requested resource could not be found or the URL is not recognized |
| 405 | Method Not Allowed | The wrong method is being used for a route (like a POST vs a GET, will be explained later) |
| 410 | Gone | The requested resource has been permanently deleted from the server |
| 418 | I'm a teapot | The server refuses the attempt to brew coffee (yes this is real) | 

##### Server Errors

These responses let the client know that there was an issue processing the request by the server. Usually you want to 
avoid returning these because you properly handle every error that can pop up, but there are times when it's unavoidable 
or necessary.

Here are a few of the common ones:

| Code | Name | Description |
| :--- | :--- | :--- |
| 500 | Internal Server Error | Usually thrown on an exception the server doesn't know how to handle, you want to try and avoid these |
| 502 | Bad Gateway | The server (acting as a gateway) got an invalid response (usually this happens for certain server configuration errors) |
| 503 | Service Unavailable | The server isn't ready to handle the request (usually when the server is down or overloaded) |
| 504 | Gateway Timeout | When the server (acting as a gateway) could not get a response in a specified timeframe |

#### JSONs

JavaScript Object Notation (JSON) is a way of representing data in a very clean and easy to write way. It's commonly 
compared to XML. You can see an in-depth description of everything on the 
[JSON website](https://www.json.org/json-en.html).

The JSON data format consists of three main data types; the `value`, `array`, and `object` types.

##### Values

Values are very simple, and there are only about seven main types: strings, numbers, objects, arrays, `true`, `false`,
and `null`. 

##### Arrays

Arrays are a collection of `value`s commonly also referred to a vector, list, or sequence. See examples below:

```json
[]

["a", "b", "c", "d", "e"]

[[], ["a"], ["b", "c"]]

[1, 2, ["a"], "b", true, false, null, [[[[]]]]]
```

##### Objects

Objects are similar to arrays, however, they have keys which are assigned to each value. They're also commonly known as  
serialized versions of an object, record, struct, dictionary, hash (the data type kind), map, hash table, keyed list, or
associative array if you've heard of any of those before.

>Serialization refers to the act of taking data from a data type or object state and turning it into a format that can
>be stored/transmitted/more easily read and reconstructed later.

>Deserialization refers to taking serialized data and turning it back into its original state.

Here are some examples:

```json
{}

{
  "simple": "object"
}

{
  "key": "value",
  "other key": 5,
  "nested object": {
    "key": true,
    "value": [1, 2, "a", { "hello": "world" }]
  }
}
```

#### Request Types Overview

In HTTP (and as mentioned previously) there are multiple different request types. A lot of them will be covered in the 
following lesson, so we'll just have a high level overview here.

Each type of request is supposed to represent a different operation in the idea of [Create, Read, Update, Delete 
(CRUD)](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete).
There are a couple outside of those, but in most cases, you'll just stick with those operations.

##### GET

The `GET` method is one of the most commonly used request methods (along with `POST`). It corresponds to the read 
operation of CRUD, so it's usually used when you're trying to just get information from a server. In fact, whenever you
load a website using a web browser, you're sending `GET` requests to the website you want to access. 

### What is REST

Representational State Transfer (REST) is a set of constraints for building web services. RESTful web services, or 
web applications that conform to REST techniques require the following constraints.

- *Server-Client Architecture*: The server-client architecture discussed earlier.
- *Stateless*: the server can't store any client context on the server, so clients are the only ones that know about 
their session state and contain all information necessary to make a request. If the server needs to know any of the 
client context (like authentication information), it should be stored in a database.
- *Cacheable*: Responses can be marked as cacheable or non-cacheable so that optimizations can be performed for 
scalability and performance.
- *Layered System*: A client shouldn't need to know if it's connected directly to the end server or if there are 
intermediary services.
- *Uniform Interface*: The server's resources and implementation should be decoupled from what is returned to the 
client.

### Postman and API Clients

Now that you know some of the basics of web requests and the way that the web works, let's try out some HTTP requests
and inspect the responses. API clients are programs that nicely let you send any kind of request with any information to
whatever URLs you define. Some of the nice ones even let you define setup scripts or post request tests for ease of use
and validation later on.

In terms of being able to be run through the command line and being on almost every computer, 
[curl](https://curl.haxx.se/) is an extremely useful and functional (but quite complicated) tool. Feel free to try it 
out with a command like `curl https://curl.haxx.se/`, and you should see the curl webpage in HTML. If you try 
`curl -o test.html https://curl.haxx.se/`, and then open that file in a web browser, you should see the webpage, but
downloaded!

Working entirely on the command line like that can get really annoying though, so try out one of our favorite API 
clients: [Postman](https://www.postman.com/). In here, you can run almost any type of request, authenticate, set
headers and body (if applicable), run scripts and tests, see the output (in HTML too!), status code, time, size, and
returned cookies and headers! If you find that you end up using a lot of the same requests, you can also save them and 
pull them up later on. We've used this for classes, coop, and personal projects, and hopefully you'll find this useful.

## Routing on the Backend

Now we'll get to setting up the individual routes for the backend of our website so that you can access different 
resources.

### Structure of the Backend

From the root directory, you'll notice that there are three main directories: api, persist, and service. 

The api directory is where all requests will enter through. It is the way that any external program will interact with
and view the results of our application.

The persist directory is where all *persisting* information will live. Starting out, it is where we'll create our 
database mocks, and later on, it will be where our database interactivity classes will be placed.

The service directory is what unifies everything together. Since we want to not make the persist and api directories 
dependent on each other, there will end up being a few interfaces that are made available and implemented in service. 
This is because some of the operations we want to perform need to know of both persist and api functionality (but 
remember, they shouldn't know about each other). 

Don't worry about having to figure all of this out yourself though, we'll provide some help to get you started. Also,
for those of you who know about the 
[Model-View-Controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) design pattern, this 
follows that! In this case, persist is our model (since it stores and holds the data), api is our view (since it's what
the user/external applications use), and service is our controller (since it links everything together and handles
the interactions between them).

### What is Routing?

Routing is when we define the actual routes/paths of our application and the functionality that they provide. 

![simple-url-example](./img/simple_url.png)

*https://doepud.co.uk/blog/anatomy-of-a-url*

In the image above, when we refer to the path, we're talking about the part from (and including) the slash after the 
domain name. So, for example, in the [https://c4cneu.com/jumpstart](https://c4cneu.com/jumpstart) URL, `/jumpstart` is 
the path.

### Routing in Vert.x

Routing in Vertx is done with `Router` and `Route` objects provided by the Vert.x dependency. In the api directory, we 
have an `ApiMain` class, which handles creating a `Router` Vert.x object, setting up a lot of the routing settings we'll 
need in the future, creating a home `Route`, and setting the port to start on.

The home `Route` or root route is the path `/`. Using what we learned earlier, if we were hosting a server locally on 
port :8081, that would be accessible by the URL `http://localhost:8081/`. We can also see that in the `Route` object for
home produced by the `Router` in `ApiMain.startApi()`, a route handler was set using the `handler()` method and by 
passing in a [Method Reference](https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html), which is a 
type of lambda or anonymous function. Down below, you can see a `handleHome()` method that takes in a `RoutingContext`
from Vert.x, which is an object containing all of the request info we need. We use that to construct a response by 
getting a new response object from the `RoutingContext`, setting the status code, putting header information, and 
setting CORS info. Finally, the interaction is ended with the `HttpServerResponse.end()` method.

Since that's a lot of stuff to set when finishing up a response, we've provided some `end()` methods for you in the 
`com.codeforcommunity.rest.IRouter` interface, which will add a lot of that for you! A lot of that was done manually in 
the `handleHome()` method to show what it looks like.

#### Static Routing

Let's go through the exercise of creating a new route. We'll need to start out by creating a new `Route` object from the
`Router`. First what you should do is create a new one right after the home route's handler is set. We'll do that using 
a register route method. You'll need to pass in the `Router` object that was created earlier in the method. 
Let's create a route `/hi`.

```java 
home.handler(this::homeHandler);

// Create a new Route object from the Router, and do it for a GET request.
this.registerGetHiRoute(router);

...
// Down below in a new method.
private void registerGetHiRoute(Router router) {
  // Set the route up to respond to GET method requests.
  Route hiRoute = router.get("/hi");
  ...
```

Next we'll set the handler for that request method and finish up the `registerGetHiRoute` method.

```java 
private void registerGetHiRoute(Router router) {
  // Set the route up to respond to GET method requests.
  Route hiRoute = router.get("/hi");
  // Note: The hiRouteHandler method doesn't exist yet...
  hiRoute.handler(this::hiRouteHandler);
}
```

Finally, we'll return some data for the route in the `hiRouteHandler` method. We'll make sure to do it using our 
`IRouter.end` method. It's been statically imported, so you should just be able to call `end()` with your data.
Also, since a string is valid JSON data, we don't need to set the `Content-Type` to `text/plain`, we can just leave it
as `application/json`.

```java 
private void hiRouteHandler(RoutingContext ctx) {
  String resp = "Hey Jumpstarter!";
  // Don't forget to set the response status!
  end(ctx.response(), 200, resp);
}
```

And now you should be able to access that route at `http://localhost:8081/hi` using your API client when you restart 
your server.

For reference, the final example looks something like this:

```java 
  ...

  // In startApi().
  home.handler(this::handleHome);

  // Create a new Route object from the Router, and do it for a GET request.
  this.registerGetHiRoute(router);

  // Start the server and listen on port :8081
  // (you can access this locally at http://localhost:8081)
  server.requestHandler(router).listen(defaultPort);

  // Let the user know the server has started
  System.out.println("Hey! The server has started on port " + defaultPort);
}

private void registerGetHiRoute(Router router) {
  // Set the route up to respond to GET method requests.
  Route hiRoute = router.get("/hi");
  // Note: The hiRouteHandler method doesn't exist yet...
  hiRoute.handler(this::hiRouteHandler);
}

private void hiRouteHandler(RoutingContext ctx) {
  String resp = "Hey Jumpstarter!";
  // Don't forget to set the response status!
  end(ctx.response(), 200, resp);
}

private void handleHome(RoutingContext ctx) {
...
```

#### Route Parameters

What if you wanted to have a route parameter, that is, what if you wanted to have *dynamic* routes? Dynamic routes are
routes that don't have to be explicitly declared. These can be in paths like `/jumpstart/hi`, `/<your_name>/hi`, or
`/c4c/hi`, and then we can also have them return something like "hey <whatever you put in before 'hi'>". That can 
actually be done pretty easily. Building off of the example above, this is what we would do.

In the `registerGetHiRoute` method, we'll want to adjust the route to add the param.

```java 
private void registerGetHiRoute(Router router) {
  // Set the route up to respond to GET method requests.
  // Notice how we added a colon before the 'name' parameter.
  Route hiRoute = router.get("/:name/hi");
  // Note: The hiRouteHandler method doesn't exist yet...
  hiRoute.handler(this::hiRouteHandler);
}
```

And now that Vert.x knows to look for a parameter called 'name', it will be provided in the `RoutingContext`. We can now
change `hiRouteHandler`. We've also provided the `getRequestParameterAsString` and `getRequestParameterAsInt` methods in 
the `com.codeforcommunity.rest.RequestUtils` class to make getting that information a little easier (you'll probably 
have to import it to `ApiMain`). Check it out if you're interested in how it works though!

```java
private void hiRouteHandler(RoutingContext ctx) {
  // Request the 'name' param from the request
  String name = getRequestParameterAsString(ctx.request(), "name");
  String resp = "Hey " + name + "!";
  // Don't forget to set the response status!
  end(ctx.response(), 200, resp);
}
```

So now the route should respond "Hey Jumpstarter!" when you navigate to `http://localhost:8081/Jumpstarter/hi`

#### Query Parameters

Query parameters are another kind of parameter that can be included. They are (sometimes optionally) included at the 
end of the path and don't have to be included when creating the `Route` object from the `Router`. To be able to access 
them, you can use `getRequestParameterAsString`. They're written in a path by starting with a `?` and chaining multiple
together with `&`. Here are a some examples: `/some/path?param1=value1&param2=value2&param3=value3` and
`/some/path?param1=value1&param1=value2&param1=value3` (for multiple values assigned to a single parameter). The way 
that we currently have it set up, the `getRequestParameterAsString` cannot have an empty value, so if you would like to 
include query params then you should create a new method which allows empty values.

#### Creating a Sub-Router

A subrouter is a custom router which handles routing for a group of routes with the same path prefix. For example, if 
you have a bunch of defined routes for `/user/info/...`, then you can create a subrouter for `/user/info/`, and every
route created in the subrouter will automatically be prefixed with that. This is not only useful because it lets you 
type less by removing the need to copy the same prefix for similar routes, but it also allows you to separate out 
the functionality of similar methods. For example, if you have a subrouter for something such as **_posts_** *(hint, 
hint)*, then all functionality in that subrouter should be related to posts, keeping you more organized.

To create a subrouter, it's not hard at all. All you need to do is call the `Router.mountSubRouter()` method in your
`ApiMain` and set a few things up in your subrouter class.

```java 
// Again, in ApiMain BEFORE calling server.requestHandler().
// Initialize a router (that was probably passed in).
router.mountSubRouter("/path_prefix", subRouter.initializeRouter(vertx));

server.requestHandler(router).listen(defaultPort);
```

And then in your subRouter class, create a new router, set up routes, and return the router.

```java 
public class SubRouter implements IRouter {
  private final ISomethingProcessor processor;

  public SubRouter(ISomethingProcessor processor) {
    this.processor = processor;
  }

  @Override
  public Router initializeRouter(Vertx vertx) {
    // Create a new Router object in our subrouter.
    Router router = Router.router(vertx);

    this.registerRouteA(router);
    this.registerRouteB(router);
    ...
    
    return router;
  }

// Other methods for doing route work.
...
}
```

### Processor Interfaces

Since the api shouldn't know anything about the database, a lot of the time processing needs to be done in the service
directory/module. That makes things complicated though, since the api module needs to be able to call these methods 
when a route is accessed. This can be accomplished by creating an interface for the processor in the api module and 
implementing it in the service module. In that way, the service module is able to implement the methods api requires 
while not needing to know exactly **how** it's implemented. 