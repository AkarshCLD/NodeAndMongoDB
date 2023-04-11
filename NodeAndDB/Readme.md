# --------------Node and MongoDB Notes--------------

# Day1

# \*\*Introduction to Node.js

Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript code outside of a web browser.

open-source: Means anyone can access it [it is publically accessible]

Cross-plateform: Means we can run the nodejs coding in various platforms or where javascript is installed or can run.

It is in between the client side and Database which take care of the request and response.

## Why we use NodeJS?

Node.js is used for building server-side applications, meaning it allows developers to create web applications and services that can handle a large number of connections and requests. Because it uses a non-blocking This makes it particularly useful for building real-time applications, such as chat applications or online gaming platforms.

## Blocking and Non-Blocking:

**A blocking operation** is one that prevents any other code from executing until it has completed.
just like synch language. This means that if a piece of code is waiting for a blocking operation to complete, it cannot execute any other code during that time. In a web application, a blocking operation can cause the server to stop responding to other requests until the operation has finished. This can lead to slow performance and poor user experience.

**A Non-blocking operation**does not stop other code from executing while it is being executed. Instead, when a non-blocking operation is started, the code continues to execute and does not wait for the operation to complete. When the operation has completed, the callback function associated with the operation is called, and the result of the operation can be handled by the code.

---

# what is REPL?

    R-Read means it first read the input and then it converts the input into JS data structure , it is stored in to the memory.

    E-Eval means it after the read concepts it will move to eval part mens it is going to evaluate your input and give the desired output

    P-Print means after evaluating the input and geeting the resuls is printed

    L-Loop means After the results get printed, it loops back to the input command. This loop continues its action until ctrl+c is pressed twice which terminates the loop thereby ending it.

---

# what we can do with REPL

- JS expression
- use variables

---

# fs module

    const fs=require("fs")

    fs.writeFileSync("read.txt","hello this is another file added using FS module") // it is creating the read.txt file and if the file exits then it
    add only the msg / string
    fs.appendFileSync("read.txt","  hello it is appendend without overwriting the preious data") // it is appending the msg without overwrite the
    previous data
    const bufferdata=fs.readFileSync("read.txt")
    fs.renameSync("read.txt","rename.txt")
    console.log(bufferdata.toString())

---

# what is the difference between Node.js V/S Browser?

**Node.js and web browsers are two different environments that use JavaScript as their primary programming language, but they have different purposes and capabilities.**

**Browser** is a client side environment that runs the JS code in the web page.

They are designed for rendering HTML, CSS, and JavaScript to create interactive web pages and web applications.

**NodeJS** is a runtime environment that allows developers to execute JavaScript code outside of a web browser, specifically on the server side.

It is designed for building server-side applications and services, such as web servers, APIs, and real-time applications.

---

# Example: Creating Simple server:

    import http = require("http")

    const app=http.createServer((req,res)=>{
        res.write("Hello");
        res.end();
    })

    app.listen(4000,()=>{
        `server is running in the ${port}`
    })

---

# Day2

# What is the module and module.export?

A module in Node.js is usually defined in a separate file and can contain variables, functions, or objects. To make a module available for use in other parts of an application, it needs to be exported using the module.exports
when we want to export multiple variables/ function from one module to another we use expoerts.

There are two types of require in nodejs:

1st: core modules

2nd: user-defined modules.

**core modules** : These are the built-in modules that provide basic functionality and can be loaded using the **require** function without specifying a file path.

**User-defined modules**: These are created by developer and are loaded using the **require** function with a file path that points to the module file.

# example for the core modules:

## Server.js File-->

    import http = require("http")  // this one is the Core modules

    const app=http.createServer((req,res)=>{
        res.write("Hello");
        res.end();
    })

    app.listen(4000,()=>{
        `server is running in the ${port}`
    }

# example for the User-defined modules:

## Server.js File:

      import http = require("http")
      const data=require("./data")
      const app=http.createServer((req,res)=>{
        res.write("Hello");
        const datalist=data.lists()
        console.log(datalist)
        res.end();
    })

    app.listen(4000,()=>{
        `server is running in the ${port}`
    }

## data.js file:

    exports.list=()=>{
        const lists=["akarsh","sp","shubham"]
        return lists;
    }

---

# http status code that are most used in the backend:

## 1. 200:[Success/OK]: 

The HTTP status code 200 represents success which means the page you have requested has been fetched. The action made has been accepted and has been delivered to the client by delivering the requested page. 

## 2: 400[Bad Request]:

When the client requests a page and the server is not able to understand anything, it displays a 400 HTTP status code. The client SHOULD NOT repeat the request without any changes.

## 3: 401 (Unauthorized Error)

This HTTP status code requires user authentication. The response includes the WWW-Authenticate header field containing a challenge applied to a requested source. 

## 4: 403 (Forbidden):

The HTTP status code 403 implies that the request is understood by the server, but still refuses to fulfill it.

## 5: 404 (Not Found)

404 HTTP Status code appears when you request a URL and then the server has not found anything

## 6: 500 (Internal Server Error):


500 HTTP status code means requesting a URL is not fulfilled because the server encounters an unexpected condition. It gives information about the request made if it is successful, and throws an error. When there’s an error during a connection to the server, and the requested page cannot be accessed then this message is displayed. 




# Day3:

# Different types of http requests

- **GET**: The GET request is used to retrieve data from a server. It can be used to retrieve a specific resource, such as a webpage or an image.

- **POST**: The POST request is used to submit data to the server, typically for the purpose of creating or updating a resource. For example, a user might submit a form with data to create a new account on a website.

- **PUT**: The PUT request is used to update an existing resource on the server. It replaces the entire resource with the new data.

- **DELETE**: The DELETE request is used to delete a resource from the server.

- **GET and POST methods are mostly used**

## Example using HTTP of get and post method:-

    const http = require("http");

    const app = http.createServer((req, res) => {
        if (req.url == "/") {
             res.write("hello the server is running")
             res.end();
        }
         else if (req.method==="POST" && req.url==="/signup") {
             req.on("data", (e) => {
             res.write(e)
              res.end()
             console.log(e.toString())
            })
        }
          else if(req.method=="POST" && req.url==="/login"){
             req.on("data",(e)=>{
            res.write(e)
            res.end();
        })
    }

    })

    module.exports = app;

---

# Express

- Express is a framework built on top of Node.
- Express is a tool that makes it easier to build web applications using Node.js.
- It provides for handling HTTP requests, routing, and middleware.

- Express helps you manage everything, from routes to handling requests .

| HTTP                                                                                                                                                                                                                                           | Express                                                                                                                                                                                                               |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| It is an in-build module which is pre-installed along with NodeJS. It is used to create server and set up connections. Using this connection, data sending and receiving can be done as long as connections use a hypertext transfer protocol. | Express as a whole is known as a framework, not just as a module. It gives you an API, functional web server with all the conveniences necessary for that (static asset hosting, templating, CORS POST data handling. |
| HTTP is an independent module.                                                                                                                                                                                                                 | Express is made on top of the HTTP module.                                                                                                                                                                            |

## Example using Express of get and post method

    const express = require("express");

        const app = express();

        app.get("/",(req, res) => {

            res.send("hi it is runnung using express server")
        })


        app.post("/host/:id",(req, res) => {
           if(req.id===5){
            req.on("data",(decode)=>{
                res.send(decode.toString())
                console.log(decode)
            })
           }
           else{
            res.send("error")
           }
        })
        app.listen(4010, () => {
            console.log("port is running")
        })

---

# Day4:

# Express Routing

**Routing** defines the way in which the client requests are handled by the application endpoints.

There are two ways to implement routing in node.js :

1:Using Framework: The most popular is Express.js.

2:Without using Framework

## Using Framework:

     const express = require('express')
     const  app = express()

     app.get('/', function(req, res) {
         res.send('Hello Sir')
     })
     app.post('/login', function(req, res) {
         res.send('this is the login page')
     })
     app.post('/signup', function(req, res) {
         res.send('this is the signup page')
     })

     app.listen(4011,()=>{
        console.log("server is running")
     })

## without using Framework:

    const http = require('http');
      http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});



     if(req.url ==='/about') {
        res.write(' This is about us page');
        res.end();
    }
    else if(req.url ==='/contact') {
        res.write(' This is contact us page');
        res.end();
    }
    else {
        res.write('Hello World!');
        res.end();
    }
    }).listen(4012, () =>{

    console.log("server start at port 4012");
    });

---

# Middleware:

**Middleware in Nodejs is a function that are invokes in the middle of the request-response process.**

**middleware is nothing but a function that runs even before the call goes to the API for which it is meant to be .**

- middleware is in between the server and the client that sits in the middle and intercepts incoming requests, processes them, and then passes them on to the next thing if there is nested middleware.

- in this it accepts 3 parameter like:(req,res,next)

- req object and response object are same as previous but the extra parameter is added that is next function

- **next()** is going to forword to next cycle if the autherization is succesfully completed if there is an error then it will not move forword and it will not hit the api it will cancel the request at that time only.

## why we need the middleware?

- It can end the request and response cycle.

- it can call the next middleware by the next().

- it helps developers build applications more efficiently.

- It controls connections between application components

# Example of app. level and routing level middleware :

            const express = require("express")
            const app = express();

            const middleware1 = (req, res, next) => {
                console.log("middleware one is running")
                next();
            }
            const middleware2 = (req, res, next) => {
                console.log("middleware two is running")
                next();
            }

            const routerlevelmiddleware=(req, res, next) => {
                console.log("router levelmiddle ware  is running")
                next();
            }
            app.use(middleware1)  // application level middleware

            app.use(middleware2)

            app.get("/", (req, res) => {
                // res.sendStatus(200)
                res.send("Home page")
            })
            app.get("/blogdata", (req, res) => {
                // res.sendStatus(200)
                res.send("blogdata page")
            })
            app.get("/bloglist",routerlevelmiddleware,(req,res)=>{  // routing level middleware
                res.send("bloglist page")
            })
            app.listen(5001, () => {
                console.log("server is running on the port 5001")
            })

## error level middleware:

Error level middleware is a middleware function  that is used to handle errors that occur during the request-response cycle app. middleware function is typically the last middleware function in the middleware stack, and it is responsible for catching any errors that were not handled by other middleware functions.

The error level middleware takes four arguments: err, req, res, and next.

 The err argument is the error object that was thrown by a previous middleware function, or by the application code itself. The req argument is the request object, the res argument is the response object, and the next argument is a function that is called to pass control to the next middleware function in the stack.

    const express = require('express');
     const app = express();


        function errorHandler(err, req, res, next) {
              res.status(500).send('Something broke!');
         }
       app.use(errorHandler);

       app.listen(4000,()=>{
        console.log("server is running in 4000")
       })

---

# What is CORS?

**CORS stands for Cross-Origin Resource Sharing**

CORS is a mechanism to allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

For example, if you had your web API on one server and your web app on another you could configure CORS in your Web API to allow your web app to make calls to your web API.

It is used to secure a certain web server from access by other domain like you want to connect the backend port into your frontend port then we use the cors which is sharing the data.

like:

        const express = require("express");
        const cors=require("cors")
        const app = express();
        app.use(cors({
            origin:"*"   // with this any port can use it in the frontend to fetch the name and email using fetch or axios
        }))
        app.get("/data",(req, res) => {

            res.json([{
                id:1,
                "name":"akarsh gupta"
                "email":"ak@gmail.com"
            },

            {
                id:2,
                "name":"SHubham Kumar"
                "email":"sk@gmail.com"
            }
            ])
        })

        app.listen(4013)

---

# adding 404 error:

In Express, 404 responses are not the result of an error, so the error-handler middleware will not capture them. This behavior is because a 404 response simply indicates the absence of additional work to do.

Express has executed all middleware functions and routes, and found that none of them responded. All you need to do is add a middleware function at the very bottom of the stack (below all other functions) to handle a 404 response:

like:

    app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
     })

---

# Body-Parser?

Body Parser is a middleware of Node JS used to handle HTTP POST request. Body Parser can parse string based client request body into JavaScript Object which we can use in our application.


It is used when the data we are accesing from the user side like a user fills the form then to use that request object we exposes it on req.body so in that time we need the body-parser.

This body-parser parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.

if we are not using body-parser then it will lose the data, and request. body field will be empty or undifined. but if we are using the latest version of the express is then we can avoid and we can use insted  express.json() instead of that.

# Example:

    const express= require ("express")
    const body_parser=require("body-parser")

    const app=express();

    app.use(body_parser.urlencoded({extended:false}))
    app.use(body_parser.json)
    app.post("/login",(req,res)=>{
        const name=req.body.name;
        const email=req.body.email;

        res.send("login succesfully")


    })

    app.listen(4014,()=>{
        console.log("serevr is running")
    })

---

# Day5

# Bcrypt :

Bcrypt is a library to help you hash passwords.

Bcrypt changing your simple password into the some length character which is nothing your hash password.

before it hashing the password bcrypt uses the salt so that unique random string that make the hash unresolvable.

to generate the salt we need the salt rounds and  With "salt round" they actually mean the cost factor. The cost factor controls how much time is needed to calculate a single BCrypt hash. The higher the cost factor, the more hashing rounds are done. 



        suppose your password is [akarsh@12345] now what bcrypt will do it will it will apply some alogorith like ths salt will generate the unique random string or chararcter/ or symbols

    now by the combination of that it will generate the hash pasword so that no one can encrypt it easily

## Example: for the hashing the password

    const express= require ("express")
    const body_parser=require("body-parser")
    const saltrounds=10;
    const app=express();

    app.use(body_parser.urlencoded({extended:false}))
    app.use(body_parser.json)
    app.post("/login",(req,res)=>{
        const name=req.body.name;
        const email=req.body.email;
        const plainPassword=req.body.plainPassword;


    bcrypt.hash(plainPassword, saltrounds, (err, encryptpassword) => {
        if (err) {
            res.sendStatus(401);
        }
        else {
            res.send(encryptpassword)
        }
     })

    })

    app.listen(4014,()=>{
        console.log("serevr is running")
    })

## Example: for the comparing the password we use bcrypt.Compare();

    bcrypt.compare(enetred_password, hash)
      .then(res => {
        console.log(res) // if it is true when it matches with password
      })
      .catch(err => console.error(err.message))
     }

---

# Authentication and Authorization:

These both are used for the security purpose the differnece between them are as:

**Authentication** means if the user provided some credentials like user name and password and sending to the server now the server will check that credentials in the database that it is existing user or not if exits then password is correct or not.

**Authorization** is the process of verifying who a user is, while authorization is the process of verifying what they have access to. Initially we will just check token in the header of request for restricted routes, then allow or deny request.



# Day6

# JWT token:

A JSON Web Token, or JWT, is an open standard for securely creating and sending data between two parties, usually a client and a server. It's a string of characters that consists of three parts separated by dots:

**eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9** .
**eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ** . **SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c**

The first part is for the : HEADER
The second part is fpr the : PAYLOAD
The third part is for the : VERIFY SIGNATURE

**Header**: Contains information about the type of token and the encryption algorithm used.

**Payload**: Contains the actual information you want to transmit. It can include things like user ID, expiration date, and other metadata.

**Signature**: The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

in the payload it have 2 things : type , and algorithm

in The payload it haves the 3 things: Sub, name, and iat.

JWTs are commonly used in web applications as a way of verifying a user's identity. When a user logs in, the server generates a JWT and sends it back to the client. The client then includes the JWT in subsequent requests to the server, which can use it to authenticate the user and authorize access to certain resources.

if the some resources are not accessed to that client then it will send the msg like unautorized or if the token is expired then it will thow the token expired.

# example of JWT:

        const ex = require("express")
        const jwt = require("jsonwebtoken")
        const app = ex()
        const secretkey = "akaka"

        app.post("/logins", (req, res) => {
            const user = {
                id: 1,
                username: "akarsh",
                email: "ak@gmail.com"
            }
            jwt.sign({ user }, secretkey, { expiresIn: "300s" }, (err, token) => {
                res.json({
                    token
                })
            })
        })
        app.post("/profile", verifytoken, (req, res) => {
            jwt.verify(req.token, secretkey, (err, authdata) => {
                if (err) {
                    res.send({
                        result: "token invalid"
                    })
                }
                else {
                    res.json({
                        authdata
                    })
                }
            })
            console.log("profile")
        })

        function verifytoken(req, res, next) {
            const berare = req.headers["authorization"];
            if (typeof berare !== undefined) {
                const token = berare.split(" ")[1]
                req.token = token;
                next();
            } else {
                res.send({
                    result: "token is not valid"
                })
            }
        }
        app.listen(8800, () => {
            console.log(" server is running")
        })

---

# Socket

## what is Socket and why we use it?

- socket.io is basically used for the bidirectional communication channel between the client side and the server side.and it is used in various application like Chat App , Game App, etc.

* A socket is like a virtual phone line that two computer programs can use to talk to each other over the internet. It enables communication by creating a connection between the programs using a specific protocol, such as **TCP**

- **TCP stands for Transmission Control Protocol** means a communications standard that enables application programs and computing devices to exchange messages over the network

# why we use it?

- previously what we are doing the API calls from the client side and then the server send the response back to the client but here the communication is happening from the client side only not from the server side so if let say server also wants to communicate with client then we can not do by creating the restful API.

- so to make the communication between them in the vice versa we use the socket programming.

## So what is the Difference between the HTTP And Socket

- **http** is a unidirectional or one way communication where client sends request and server send response to the client.

- lets see the example of the http server--->when the client send the request , corresponding to that request server send the response back to it and after the sending the response the server connection get stoped or cancelled.

* Where as **Socket** make the two way communication or Bidirectional channel between the client side and the server side.

* lets see the example suppose whenever we our start the connection between client server the client-server make the bond and then decide to create a new connection and now this new connection will run till that until unless the client is not stoping the connection

Example-  
Server.js

    const express= require("express")

    const socket require("socket.io")

    const app= express()

    const io =socket(server,{
        cors:{
            origin:"*"
        }
    })

    io.on("connection",(socket)=>{
        console.log("socket is connected")
    })
    const server=app.listen(4040,()=>{
        console.log("server is started)
    })

## Client.js

    const io = require("socket.io-client")

    const socketClient = io("http://localhost:6000/")


      socketClient.on("connect", () => {
      console.log("socket client is connected")
      })