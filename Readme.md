# --------------Node and MongoDB Notes--------------

# \*\*Introduction to Node.js

Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript code outside of a web browser.

open-source: Means anyone can access it [it is publically accessible]

Cross-plateform: Means we can run the nodejs coding in various platforms or where javascript is installed or can run.

It is in between the client side and Database which take care of the request and response.

## Why we use NodeJS?

Node.js is used for building server-side applications, meaning it allows developers to create web applications and services that can handle a large number of connections and requests. Because it uses a non-blocking, event-driven I/O model, it can handle a high volume of requests efficiently.This makes it particularly useful for building real-time applications, such as chat applications or online gaming platforms.

## Blocking and Non-Blocking:

**A blocking operation** is one that prevents any other code from executing until it has completed. This means that if a piece of code is waiting for a blocking operation to complete, it cannot execute any other code during that time. In a web application, a blocking operation can cause the server to stop responding to other requests until the operation has finished. This can lead to slow performance and poor user experience.

**A Non-blocking operation**does not stop other code from executing while it is being executed. Instead, when a non-blocking operation is started, the code continues to execute and does not wait for the operation to complete. When the operation has completed, the callback function associated with the operation is called, and the result of the operation can be handled by the code.

**That's why In Node.js, most I/O operations are non-blocking, which allows the server to continue responding to other requests while the I/O operation is being performed. This is achieved through an event-driven, non-blocking I/O model, which allows Node.js to handle a large number of requests with low latency and high efficiency.**

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

