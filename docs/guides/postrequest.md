# How to Make a POST Request

> A POST request is a type of HTTP request.


## What is HTTP?

HTTP stands for Hypertext Transfer Protocol. HTTP defines a common language that applications on the internet use to communicate with each other. Typically, when you visit a website, your browser is communicating with the website's server through HTTP (nowadays you'll often also see HTTPS which is very similar to HTTP but with added security features).

HTTP defines standards for an entire "conversation" between two applications which consists of several requests made by one application and corresponding responses from the other.

Learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview

## What is an HTTP Request?

An HTTP request is block of text and other data that is made up of several parts: a method, a URL, several headers, and an optional body.

## 

The **method** is one of several pre-defined strings. The method determines the *type* of request you're making. There are different conventions that developers use for handling certain HTTP methods but HTTP does not enforce any specific difference between methods, they exist simply for the user's convenience. There are many different methods, but the 4 more common are:

- **GET**: Used to retreive data, will typically not include a request body
- **POST**: Used to create data, usually does contain a body
- **PUT**: Used to update or change some existing data
- **DELETE**: Used to delete some existing data

For a full list of methods and what they're used for, look here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

## 

The **URL** defines where you're sending your request. This URL will look the same as the URL for a website (because websites are served through GET requests!). A URL consists of 3 parts that are combined consecutively:

- **Protocol**: This defines the standard protocol you're using, `http://` for HTTP or `https://` for HTTPS
- **Domain**: Two or more strings that are separated by `.`, can sometimes also include a `:` at the end with a number between 0 and 65535. This defines the physical location that your request is going, `google.com`, `my.northeastern.edu`, `localhost:8081`
- **Path**: Zero or more strings seperated by `/`. Think of this as the organizational structure the owner of the server is using.

Some HTTP requests can also include **Query Parameters** which appear after a `?` at the end of the path, but we won't have to worry about this for now.



## 

**Headers** are a list of key-value pairs that give some information about the request that is being made. Headers consist of a key and a value separated by a `:`. Headers can convey any kind of data about the request to the receiver including where the host is coming from, any authentication the caller has, how the server should respond, how to read the data in the body, and much more.

Most of the time you can rely on the application you're using to make the request to fill in standard headers.

You can read more about headers here: 
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

## 

The **body** of the request is an optional block of data you want to send to the server. The body can be any type of data. The type of data is defined in a header with the key `Content-Type`. There are standard values for the Content-Type header that are agreed upon standards that you should use.

A very common way to send body data is with JSON which has a Content-Type of `application/json`. JSON, or JavaScript Object Notation, is a very simple but powerful way to convey data and is defined here:

https://www.w3schools.com/js/js_json_syntax.asp


## How do I send an HTTP Request?

There are many different ways to send an HTTP request but here we'll cover only cover sending requests with **Postman**.

Postman is an application that you can download that makes it simple and intuitive to send HTTP and HTTPS requests.

You can download Postman here: https://www.postman.com/downloads/

When you open Postman you can start a new request by clicking the tab with the `+` sign at the top of the application.

Near the top of your tab you will have a dropdown select menu and a text field. You can select an HTTP method from the select menu. In the text field you can enter the entire URL for your request (protocol, domain, and path).

Below the URL there are several subtabs for different options. You can see and edit your headers from the "header" tab, but you can normally just allow Postman to automatically generate headers for you.

You can add a request body from the "body" tab. You can select from several different ways to specify your body, "raw" allows you to type your body directly. With "raw" selected, you'll see a dropdown next to the body type options where you can specify the format of your body. By selecting "JSON" Postman will provide some syntax highlighting and inform you of any errors. By entering your body this way, Postman will automatically create the "Content-Type" header for you which you can see on the "headers" tab.

Once you've entered all your data you can click "Send" and you'll see the server's response below!

## 

Another popular tool for making HTTP requests through your command line is **cURL**. If you want to try using that, you can find a tutorial here: https://hackernoon.com/how-to-easily-use-curl-for-http-requests-db3249c5d4e6

## How to Know Your Request was Successful

HTTP also defines a format for responses to requests. Responses have headers and optional bodies like requests. Instead of a method however, responses include a `Status Code`.

A Status Code is a 3 digit number. Status codes are like request methods in that they are used to determine the "type" of response based on conventions defined by developers. The leading digit of a status code gives a general classification of the status code and the remaining two digits are used for further specificity. Status codes that begin with `2` mean the request was successful. Beginning with `4` means the person making the request has caused the request to fail and beginning with `5` means the receiver has had an error that caused the request to fail.

The 3 most common status codes are:

- `200 OK`: This means everything went well and your request was a success!
- `400 BAD REQUEST`: This means there was an error with either the headers or body of the request. This could be used if the data wasn't formatted correctly or the data didn't match what the server was expecting.
- `404 NOT FOUND`: This means that the request didn't reach a server that knew how to handle it. This could be due to your domain being wrong, your path being wrong, or using a method that the server didn't expect for the given URL.


A complete list of status codes and what they mean can be found here: https://www.restapitutorial.com/httpstatuscodes.html

If you are applying to C4C, you'll know you've done everything right if your request responds with a `200` status code!

