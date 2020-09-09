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
    - What is REST (REpresentational State Transfer)
    - What is HTTP
        - Status Codes in HTTP
            - 200s
            - 300s
            - 400s
            - 500s
        - JSONs
        - Request types overview
            - GET
            - Other types (also next week's topic)
3. Routing on the Backend
    - What is routing?
        - Static routing
        - Routing with Vert.x
        - Route parameters
    - Postman and API clients
    
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
HTTPS is usually not used since a certificate has to be created, so just focus on using HTTP for now.

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