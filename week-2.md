## WEEK 2 TUTORIAL WIP


### Initital ideas for the tutorial structure

This tutorial will run through creating a node app to serve JSON data about the different HTTP status codes, in accordance with the principles of REST.

#### Set up
1.
   - set up a new project and install express. Alternatively, we provide a blank project to fork.
   - hint: `npm init -y` & `npm i -S express`
   
2.
   - download the provided `/data` directory (we will provide) to your project's root directory. take a look at the contents. 
   - This will be JSON files for each of the routes that the students will add in the session.
   
3.
   - download postman

#### Build a json api

1.
   - write a server.js file
   - create a `GET '/'` route to serve the base JSON (read the file path and send the response as json)
   - this will serve information about the resources available from our API. Our work is to create them all.
   - run the server on port 8080

2.
   - create a `GET /code` route to serve the `/data/code.json` file.
   - get it in your browser (check out a json formatter)

3.
   - create a `GET /code/:id` route to serve data about an individual code within the `/data/code.json` file.
   - if there is no such code in that file, respond with a 404.

4.
   - create a POST /code/:id route. this should save the post data to a file on your machine
   - using postman, post the supplied json to your `localhost:8080/api/:code` endpoint
   - try to get it in your browser

#### MVC (advanced / extra)

1.
   - set up a templating engine? or static files? the different use cases. add an api source and add stuff into the view.
   - store the HTML in a views directory
   - could render the JSON data into a view

### homework

- practical project
 - maybe add to the app from the session - 3, setting up views for the data?
 - add more routes for the HTTP / REST verbs / methods
- "koans"
 - supertest unit tests to isolate concepts
 - run tests in CI when PRs submitted

---------------------

# Notes

Things we want to cover, from notes during the week:

### Repetition of the web backend use case: serving JSON and HTML
- This is important to keep in mind why we do node in the first place
- TASKS: (?)
- practical: make another app to serve JSON (and HTML)
- theoretical: stand up and explain some web backend concepts, eg
 - status codes
 - REST and routing
 - headers, query params, posting data
 - what's the difference bewteen sending JSON or HTML

- controller - some logic and some aync processes to run before sending JSON / HTML response

### Talk a bit more about the tooling use case of node (as scripts)
- There was some confusion I felt about using node/npm in tooling vs as servers

- TASK: write a little node script? how to fit this in with the rest of the session?

### Basics of Node programming
- what is sync vs async,
- what does it mean to “block” and why it is bad
- what are streams
- what is global state
- what is the request lifecycle (vs. statefulness)

- TASKS
 - practical: include async processes, blocking and non-blocking. (cf the node girls what is node)
 - practical: game!
 - theoretical: stand up and explain these fundamentals
 - practical and theoretical: the node girls what is node document
