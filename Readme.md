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

|HTTP|Express|
|:--|:---|
| It is an in-build module which is pre-installed along with NodeJS. It is used to create server and set up connections. Using this connection, data sending and receiving can be done as long as connections use a hypertext transfer protocol.|Express as a whole is known as a framework, not just as a module. It gives you an API,  functional web server with all the conveniences necessary for that (static asset hosting, templating, CORS POST data handling.|
|HTTP is an independent module.|Express is made on top of the HTTP module.|
## Example using Express  of get and post method


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

 1:Using Framework:  The most popular is Express.js.

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

- it  helps developers build applications more efficiently.

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


---

# What is CORS?

**CORS stands for Cross-Origin Resource Sharing**

CORS is a mechanism to allow requested resources on a web server depend on where the HTTP request was initiated.

 It is used to secure a certain web server from access by other domain like you want to connect  the backend port into your frontend port then we use the cors which is sharing the data. 

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

    
----

# adding 404 error:

In Express, 404 responses are not the result of an error, so the error-handler middleware will not capture them. This behavior is because a 404 response simply indicates the absence of additional work to do.

 Express has executed all middleware functions and routes, and found that none of them responded. All you need to do is add a middleware function at the very bottom of the stack (below all other functions) to handle a 404 response:

 like:

    
    app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
     })


---

# Body-Parser?

It is used when the data we are accesing from the user side like a user fills the form then to use that request object we exposes it on req.body so in that time we need the body-parser. 

This body-parser  parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.



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
# Bcrypt  : 

Bcrypt is a library to help you hash passwords. 

Bcrypt changing your simple password into the some length character which is nothing your hash password.

before it hashing the password bcrypt uses the salt so that unique random string that make the hash unresolvable.



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

## Example: for the comparing the password  we use bcrypt.Compare();


  
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

**Authorization**means the server checks the user who logged is having the access for the specific datya or not or which api he is havving the access.



# Project
 **Backend**: https://github.com/akarsh-gupta007/NodeAndMongoDB/tree/master/Backend

**Frontend**:  https://github.com/akarsh-gupta007/NodeAndMongoDB/tree/master/frontend"

# Day6

# JWT token:

JWT stands fro the JSON Web Token.To achive the authentication in the API we use JWT tokens.

Where ever we need to authenticate the application we uses JWT.

it is used where ever we need to authenticate the user for hitting the api 

Suppose the user logged into the facebook accounts then only user can hit the api like post or frend request , etc. now for every api he needs to authenticate again and  again then what we can do with the help of the JWT we can generate the token and send it back.

Now the user dont have to authenticate again and again user can access the any api with that token for which he is having the access of the resoures.

Now how this token works:
once the User and Password is correct or registerd then it will generate the token

now you can use the token instead of credential now how it will check that which user profile is this to whome i have to post or send the friend request now the token can verify from the backend that it is correct then only he can hit the api. 
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

