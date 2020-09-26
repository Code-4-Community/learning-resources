# Jumpstart Dictionary
*This is a dictionary for the __Code4Community Jumpstart__ course and contains terminology
Jumpstarters may not know when starting out*

## General Terminology

### Frontend

- The part of the application that the user will see and interact with. It’s the code 
that is provided to users and runs in a browser in the case of web applications. 
- An example of a frontend application is the webpage for Gmail.
    
### Backend

- The part of the application that isn’t often accessed by users. The frontend will 
access and connect to the backend for performing complex calculations, storing data, 
and providing interactions between multiple separate frontend applications. This is 
rarely provided to users, and is often held on a small set of servers.
- In the Gmail example, the backend would be the part of the application which deals 
with storing actual email data, returning it to the frontend when requested, sending 
emails, and actually moving your email from inbox to trash, spam, archive, or wherever 
else you want it to go.
- [The difference between frontend and backend](https://www.geeksforgeeks.org/frontend-vs-backend/)

### Git

- A form of version control for your code. That means it tracks changes to a project over 
time, which provides 2 main benefits.
    - If you ever make a mistake in your work, and need to undo them/revert to a different 
    version of your code, it’s really easy to do.
    - You can work on multiple different features at once without worrying about them 
    interfering with each other. This also means multiple people can work on the same 
    thing at the same time while providing a way to combine their changes when they’re ready.
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/what-is-version-control)

#### .gitignore

- A file containing regular expressions describing files and directories that git won’t keep track of.

#### GitHub

- A website for hosting git repositories. It’s used  by many major companies and 
open source projects, and it allows multiple people to contribute to the same 
project in a really cohesive manner.
- [GitHub.com](https://github.com/)

##### Open Source

- Code that is openly available for viewing, editing, and use.

#### Repositories (Repos)

- An individual 'project' in git.

#### Clone

- When a project is downloaded from an external host (like Github) to your computer using git.

#### Checkout

- A command in git which lets you switch to a different branch.

#### Branch

- The way a different history is created for a specific feature or bug being worked on. 
It allows you to split off from a specific point in the project and make isolated 
changes without having to worry that you’re changing the code you split off from.
- [Atlassian Git Tutorial - Branches](https://www.atlassian.com/git/tutorials/using-branches)

### IntelliJ

- IntelliJ is the IDE we’ll be using to run and interact 
with our frontend and backend code. It's a commonly used IDE for Java development.
- [IntelliJ - JetBrains](https://www.jetbrains.com/idea/)

#### Integrated Development Environment (IDE)

- Text editing software which provides extremely helpful capabilities for software 
development. This can include stuff like formatting, text prediction, compiling and 
running your code, error checking, hints, and many other useful features.

### Maven

- A build automation tool used for Java. It allows you to run plugins (external 
programs used to help build/check/do something to your code), rebuild, deal with 
dependencies, and manage your project.
- [Maven Homepage](https://maven.apache.org/)

### Node

- A JavaScript runtime that can be used to run JavaScript outside of a web browser.
- [Node Homepage](https://nodejs.org/en/)

### NPM (Node Package Manager)

- A Package Manager for Node, similar to Maven. It allows you to run 
programs, install dependencies, and allows for plugins too.
- [NPM Homepage](https://www.npmjs.com/)

### Architecture

- The fundamental structure of a software project.

### Database (DB/DBMS)

- An organized collection of data which is used for storing information long 
term. This is commonly used interchangeably with a Database Management System (DBMS), 
which also manages databases so that multiple systems can create, read, update, and 
delete (CRUD) data concurrently and efficiently without causing weird data issues.
- [Databases - Wikipedia](https://en.wikipedia.org/wiki/Database)

#### CRUD (Create, Read, Update, and Delete)

- The four fundamental operations of databases and handling data.

### Class

- A structured collection of data representing anything, which is extremely common 
and one of the most important concepts in programming. An example of this can be a 
‘person’ class, which can contain information such as a name, birthday, height, 
related people, and so on.

### Object

- An ‘instance’ of a class. An instance is a class which has been constructed and 
filled in with information, and is separate from other instances of the same class.

### Function

- A set of instructions which can be called to perform a series of steps.

#### Method

- A function tied to a particular class.

### Main Class

- A class which is the entrypoint of a program in Object-Oriented 
languages. This class has a Main Method.

#### Main Method/Function

- A method or function which is the entrypoint of a program.

### Object-Oriented (OO)

- A style of programming which relies on objects to be created and describes 
transformation, states, and interactions entirely through the created objects.

### Anonymous Functions/Lambdas

- Anonymous functions are functions that are created inline or over a few lines within 
another function, and are not named. 
- [Lambdas in Java](https://www.w3schools.com/java/java_lambda.asp)
- [Lambda Overview](https://stackoverflow.com/questions/16501/what-is-a-lambda-function)
    - Method Reference
        - Method references are a special type of lambda which only pass in a reference to an already created method. 
        - [Method References in Java](https://www.baeldung.com/java-method-references)

### Starter Code

- Code that we’ll be providing to make sure you will have what you need to be able to 
do work. This can either be providing you with functionality we wouldn't expect you to 
be able to figure out on your own (without a bit of help), or pre-written code if what 
we want you to do during the week ends up being a lot of work.

### Catch-Up Code

- Code that we’ll provide you at the end of the week to catch you up to where many of 
the people who are working on the project should be. We’re providing this because we 
know that sometimes life can be a lot, so we want to make sure those who are sick, have 
a busy week, or who are stuck can stay caught up with and invested in the course.

## Week 1

### Framework

- A dependency which handles setting up the boilerplate stuff. This is usually stuff which 
doesn't often change, and may end up taking a lot of work to set up, so it's nice to have 
frameworks which handle that for you.
- [Software Framework - Wikipedia](https://en.wikipedia.org/wiki/Software_framework)

#### Boilerplate

- Code that needs to be included in multiple places with little to no alteration.

### Terminal 

- An important tool which allows you to access commands and interface with your 
computer using typed commands. The terminal window runs a shell like Bash, which 
actually runs your command.
- [A Youtube Tutorial on Using the Terminal](https://www.youtube.com/watch?v=oxuRxtrO2Ag)

#### Shell

- The actual terminal syntax/program being run in a terminal. 
Examples of this are Bash and Windows Command Prompt

##### Bash

- Bourne Again Shell, a really common shell used for Mac and Linux machines.
- [BASH](https://www.gnu.org/software/bash/)

###### Git Bash

- A Bash terminal/shell for Windows.

##### Command Prompt (CMD)

- The shell for Windows machines.

### Directory 

- A folder in a filesystem. Desktop, Documents, and Downloads are all really common directories.
- Folder and directory are used interchangeably.

### Dependency/Package/Library

- Dependencies are external code projects that your project can import and use. 
They provide functionality and prevent you from having to implement a lot of things on your own. 
- A package is what a dependency is called in Node/JavaScript.
- A library is what a dependency is called in Java.

### README.md

- A file typically provided with a lot of programs which describes a high-level overview, 
instructions for setup and use, and anything else a developer would want his/her users to know.

#### Markdown

- A format of writing files in a really lightweight way which provides basic 
styling. The .md file type is a Markdown file.

### JAVA_HOME

- A system-level variable which lets programs know where to look for the Java 
Development Kit (JDK) you want to be used in general.

### Module

- Groups of code that are compiled separately of each other and can be used as dependencies in other modules.

## Week 2

### XML

- Extensible Markup Language, a syntax of expressing data in both a human and machine readable way.
- [XML Introduction - MDN](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction)

#### Tag/Element

- A basic unit in XML/HTML. They can either be self closing or wrap child tags/elements.

#### Child

- A tag/element that is wrapped in a parent element.

#### Parent

- A tag/element that wraps at least one child element.

#### Attribute

- An aspect of XML which allows you to specify extra information about an element 
without having to create children to represent properties.

### HTML

- Hypertext Markup Language, a document detailing the structure and content of a webpage 
without styling or complex functionality. This is a subset of XML, since there are specific, 
pre-defined tags/elements to be used (all HTML is valid XML, not all XML is valid HTML).
- In a comparison between HTML, CSS, and JavaScript, HTML would be like the bones of a body.
- [HTML - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML Overview](http://csis.pace.edu/~wolf/HTML/htmlnotepad.htm)
- [Elements in HTML - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

#### Div

- An HTML-specific element.
- A block/box element which wraps other elements.

#### Span

- An HTML-specific element.
- An inline element. This element can be placed inside of text to allow special 
operations on the wrapped text.

#### P (Paragraph)

- An HTML-specific element.
- A generic text element

### CSS

- A list of rules for a given set of HTML elements specified by a selector. 
CSS provides styling information like size, positioning, color, border, and many other properties.
- In a comparison between HTML, CSS, and JavaScript, CSS would be like the skin of a body.
- [CSS - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

#### Selector

- Provides a way of selecting HTML elements based off of a special set of rules. 
The three most common are ID, Class, and element type.
- [Selectors in CSS - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

#### ID

- A way of identifying specific HTML elements based off of a developer-provided attribute. 
All ID attribute values should be unique (there should only be at most one of every value) 
on a given HTML document.

#### Class

- A way of identifying specific HTML elements based off of a developer-provided attribute. 
Class attribute values can be the same between multiple different elements; 
this serves as a way to group elements together.

#### Properties 

- The keywords CSS provides so that you can modify the styling of HTML elements. 
There are a lot of these, so just looking up the general functionality you’re looking 
for will probably be easier than scrolling through the list of all elements below. The 
second link is a list of common properties.
- [CSS Properties - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [Common CSS Properties - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)

#### Box Model

- Each HTML element has three boxes around it to provide padding, borders, and margin 
(described below) which can be controlled through CSS.
- [Box Model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)

##### Padding

- The space between the actual content/element and the border.

##### Border

- The border of the element. This can be made visible if you want a border 
around your element (with different styles).

##### Margin

- The empty space between the element’s border and the next closest element.

#### Flexbox

- A method of creating a flexible layout for items that should be grouped together 
but don't need to have a specific size. Can be used with the grid method.
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

#### Grid

- A method of creating a flexible layout for items that should have very clear 
boundaries. Can be used with the flexbox method.
- [Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

### JavaScript (JS)

- A way to add interactive and complex functionality to a website. JS is the language 
of the web since it is (for the most part) the only programming language which can be run 
in a browser. It’s not related to Java, but there are a couple similarities which should 
make learning/using it easier. 
- In a comparison between HTML, CSS, and JavaScript, JS would be like the brain of a body.
- [Intro to Javascript - Codecademy](https://www.codecademy.com/learn/introduction-to-javascript)
- [Javascript - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Week 3

### Stylesheet

### User Interface

### Component

### JSX

### Framework

### DOM

### Virtual Browser

### Declarative Code

### .tsx

### Functional Component

## Week 4

### Server

- Servers (not the hardware kind) are the programs which power every website and remote service you use. 
- [Server Definition](https://whatis.techtarget.com/definition/server)

#### Client

- A program that makes requests to servers.
- [Client - Wikipedia](https://en.wikipedia.org/wiki/Client_(computing))

#### Hosting

- Hosting is the act of starting a server and making available a resource for connections.
- [What is Hosting](https://www.website.com/beginnerguide/webhosting/6/1/what-is-web-hosting?.ws)
- [GoDaddy Hosting Description](https://www.godaddy.com/hosting)

#### Localhost

- Localhost (or http://127.0.0.1) is the address that locally hosted servers can be 
accessed at. It’s called a loopback address, since any requests sent to or received 
from localhost don’t ever leave your computer.
- [Localhost - WhatIsMyIPAddress](https://whatismyipaddress.com/localhost)
- [What is Localhost](https://www.hostinger.com/tutorials/what-is-localhost)
- [What is Localhost - GeeksForGeeks](https://www.geeksforgeeks.org/what-is-local-host/)

#### Port

- A port is an individual endpoint at a specific address.
- [Ports - WhatIsMyIPAddress](https://whatismyipaddress.com/port)

#### Ngrok

- An app which routes requests through an external server so people not on your 
local network can access a port on your computer.
- [Ngrok Homepage](https://ngrok.com/)
- [What is Ngrok](https://www.pubnub.com/learn/glossary/what-is-ngrok/)

#### IP Address

- An IP address is an identification number assigned to every device in a computer network 
which uses the Internet Protocol (IP) to communicate and relay information.
- [WhatIsMyIP Homepage](https://www.whatismyip.com/)
- [IP Address Lookup - WhatIsMyIP](https://www.whatismyip.com/ip-address-lookup/)

### HTTP

- Hypertext Transfer Protocol, a method for sending data between applications.
- [HTTP - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)

#### Request

- A network interaction with a server to create a connection and send data, then receive a 
response after server processing. A request is made by a client.

#### Response

- A network interaction following a request, after the server finishes processing the 
request, a response is returned containing headers, a status code, and sometimes a 
body. A response is returned by a server.

#### Headers

- A collection of data about the request or response.
- [Headers - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

#### Body

- The actual data the request or response consists of.

### Status Codes

- Codes returned with a HTTP request which notify the client of the status of the request.
- [Status Codes - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [Status Code Cheat Sheet](https://www.restapitutorial.com/httpstatuscodes.html)

### REST

- Representational State Transfer, a software architecture style which defines a set of 
constraints for web services.
- [REST API Description](https://restfulapi.net/)
- Constraints:
    - Server-Client Architecture: an architecture where clients make requests to servers
    - Stateless: the server doesn’t store any client context on the server (except for some info in a database)
    - Cacheable: responses can be cached (or marked as not cacheable) for optimizations
    - Layered System: a client shouldn’t need to know if it’s connected to a specific layer of the server system
    - Uniform Interface: the server’s resources and implementation should be decoupled from the client

### JSON

- JavaScript Object Notation, a data representation method similar to XML which 
cleanly describes data in a JavaScript-like way.
- [JSON](https://www.json.org/json-en.html)

### Protocol

- A standard set of rules that allow electronic devices to communicate with each other. 
- [Protocol Definition](https://techterms.com/definition/protocol)

### Routing

- In terms of the backend, routing is the process of setting up different paths for an 
application which can be accessed by a client. An example of two different routes 
could be [c4cneu.com/jumpstart](https://c4cneu.com/jumpstart) and 
[c4cneu.com/apply](https://c4cneu.com/apply) (/jumpstart and /apply are different routes).

#### Router and Sub-Router

- In terms of the backend, a router is a class/object which creates and handles routes 
and route handlers. A sub-router is a router which can be provided to another router to 
add functionality to a subset of routes.

#### Route Handler

- A function/method which performs some developer-defined action when a specific route is
called.

#### Route/Path

- A specific route. In the Routing section above, /apply and /jumpstart are different routes or path.

#### Static Routing

- Static routing is a process in which we have to manually add routes to the router. This kind of 
route doesn't have a route format which defines more dynamic functionality (see Route Parameter).

#### Route Parameter/Dynamic Route

- A route parameter is a parameter that can be added to a route (making it a dynamic route 
instead of a static route) which captures information at the specific position. 
- A dynamic route is a route which has route parameters in it.
- If we have a route like /jumpstart/:user or /jumpstart/:user/session/:session_id, the 
parts of the route which are prefixed with a semicolon (e.g. :user, :session_id) are route 
parameters and can take in text or a number to be used in processing later on. Examples of 
those routes with values filled in could be /jumpstart/c4c (which would provide ‘c4c’ 
as the :user param) or /jumpstart/your_name/session/1 (which would provide ‘your_name’
as :user and 1 as :session_id).

#### Query Parameter

- A query parameter is information that can be passed in along with a route to 
provide additional information to that route. The parameters are started with a question 
mark ‘?’ and multiple are linked together using a “&”. Each parameter has a key and a 
value, linked with an equals sign “=”. An example of a route with queries could be 
/jumpstart?hello=world&myKey=some_words.
- [Query Parameter - Wikipedia](https://en.wikipedia.org/wiki/Query_string)

#### Vert.x

- Eclipse Vert.x is an event driven application framework for Java. We’re using it 
for handling server and routing related stuff.
- [Vert.x Docs/Homepage](https://vertx.io/docs/)

#### API

- An application programming interface is a computing interface which defines 
interactions between multiple software applications.
- [API Definition](https://www.mulesoft.com/resources/api/what-is-an-api)

#### API Client

- An API client is a ‘client’ application which makes sending requests and viewing responses very easy. 
You can also have setup scripts and response validators (and there are a lot of other nice 
features for some of them too!).

##### curl

- curl is a tool which allows you to send requests from the command line.
- [curl Homepage](https://curl.haxx.se/)

##### Postman

- Postman is a really nice API client which a lot of people in C4C use when developing!
- [Postman Homepage](https://www.postman.com/)

#### GET Request

- The GET method refers to a REST method that is applied while requesting information 
from a particular source. In terms of CRUD, this usually corresponds to the read operation.
- [GET Request Description](https://rapidapi.com/blog/api-glossary/get/)

#### Model-View-Controller (MVC)

- A software design pattern used in separating functionality into three main objectives.
    - Model: parts of the software responsible for handling 'data', data storage, and data
    transformation
    - View: parts of the software responsible for presenting and returning data to a user
    or external application it is connected to
    - Controller: parts of teh software responsible for handling external input and connecting
    functionality between the model and view.
- [MVC Description - Wikipedia](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

## Week 5

### Test suite

### JUnit

- A testing framework which uses annotations to identify methods that specify a test. 
This method is written in a class that is only used for testing. To define a certain method as 
test, use the `@Test` (or `@ParameterizedTest`) annotation.
- Common JUnit Annotations
    - `@Test`: the test method that will be run
    - `@BeforeClass`: run once before all test methods of this class
    - `@AfterClass`: run once after all test methods of this class have been run
    - `@Before`: run before @Test
    - `@After`: run after @Test
    - [Common Annotations](https://medium.com/@rhamedy/junit-annotations-every-developer-should-know-eb972a7a26c9)
- Assert Methods
    - `assertTrue`
    - `assertFalse`
    - `assertNull`
    - `assertNotNull`
    - `assertEquals`

- [JUnit Homepage](https://junit.org/junit5/)

### Mockito 

### Test types

- Unit
- Integration
- Functional
- End-to-end
- Acceptance
- Performance
- Smoke 

### Exceptions

#### Try/Catch

### Data Transfer Objects (DTOs)

### Marshalling

#### Unmarshalling

### Request types

#### POST

#### PUT

#### PATCH

#### DELETE

#### GET

### Enum

### Static Class

### Nested Class

### Final Class

### Abstract Class

### Inheritance

### Extended Class

#### Subclass

#### Superclass

### Override

### Compiler

## Week 6

## Week 7


### Persistent Storage

### ODBC/JDBC

### SQL

### Row

### Column

### Precision

### Scale

### Primary Key

### Not Null

### Auto Increment/Serial

### Default

### Index

### CURRENT_TIMESTAMP

### Query

### Query structure

#### INSERT

#### SELECT

#### DELETE

#### DROP

#### UPDATE

#### TRUNCATE

### Environment/Properties File

### Prepared Statements

## Week 8

## Week 9










