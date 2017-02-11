# The "What" and "Why" of Node

During Week 1, we learned how we can write a web server with JavaScript, Node.js and [Express](https://expressjs.com/). In this lesson, we'll look at what else we can build with Node, and recap why Node is useful.

## What is Node?

The Node Girls' [What is Node.js](https://github.com/node-girls/what-is-node) tutorial describes Node like this:
> * It is a runtime environment that allows you to run Javascript code in the backend (eg on your computer), outside a browser
> * The JS is executed by the V8 javascript engine (the thing that makes Google Chrome so fast)
> * Node.js uses an event-driven, non-blocking I/O model
> * Node ships with a lot of useful modules, so you don't have to write everything from scratch

The tutorial then goes much deeper into how node works under the hood. For now, we'll just stick to this definition:
* Node helps us run JavaScript outside of the browser
* Is event-driven (more about that later!)
* It has lots of useful modules built-in (and many, many more on `npm`)


## What can we build with Node?

Node.js is a *general purpose programming environment*. This means that you can build anything you want. But in practice, it is more popular in some areas of computing than in others.

Let's look at few of them.

### Web backends

Other than JavaScript, there are many programming languages you could use to write backend programs. Ruby, Python, Java, Scala, C#... The list goes on.

Most backends exist to serve web frontends. Frontend programmers use JavaScript, so it's great to be able to write the backend with the same language: You only need to learn and remember one programming language to build "full stack" applications.

### ...and other kinds of backends

Node can be used to write backends for other kinds of apps as well:
* Mobile apps
* Internet of Things
* Smart TVs, cars, desktop programs...

Unline web frontends, apps and IoT devices aren't always written in JavaScript. But Node is still a good choice, for another reason: **Node is really good at handling many concurrent requests**.

This is because Node is *event-driven*. We'll talk more about that when we recap how Node works under the hood.

### Command-line tools

Node is popular among web developers, to create tools for other developers. Of course, you could write these in any language like Ruby or Python, but again, most web developers already know JavaScript.

Node.js has another secret weapon: NPM, or the Node Package Manager. NPM is the world's largest library of executable code, and a great distribution mechanism to make your programs available for other developers.

One command-line tool you've used before is `create-react-app`:
```sh
npm install -g create-react-app
create-react-app YourApp
```

These days, almost every web developer uses command-line tools written in Node: `webpack`, `gulp`, `grunt`, `jest`, `browserify`, and thousands more are tools written in JavaScript, installed from NPM, and run in Node.
