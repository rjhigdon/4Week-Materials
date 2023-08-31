/* Front End:
- Client Folder
  - index.html (your website)
  - index.css (style your page)
  - index.js (funcitonality on your html page, send requests, etc.)

Backend:
- Server Folder
  - controllers folder
    - controller.js file to handle requests
  - server file (called index.js or server.js)j

For 4-2 Lab Step by Step

First, the conext.... We have three folders: Back End, Front End, and Node Mdoules. the project should look like this:
    Backend Folder 
      server.js
      controller folder
          controller.js
      db.json
    Frontend Folder
      index.html
      main.js
      styles.css
    package.json
    package-lock.json

Now that we know where this is going, Let's do the setup of the backend step by Step*/

/*
First we must set up our server file 
1) got to the top folder of the project and run */
    npm i    /*
 which checks the json file to see the dependencies it needs (express, cors, axios, etc) and installs needed modules. these modules will be used all over our backend.
2) make the server.js and then configure it using these commands  */
    const express = require('express')  //this accesses the express module from the node modules folder
    const cors = require('cors')     /*this accesses the cors module from the node modules folder
3) configure the express modules  */
    const app = express()/*
    which sets up our endpoints and allows us to run middleware (modules)  
4) set up the ability for the front end to send json information to the back end with */
    app.use(express.json())   
    /* When axios sends information it gets translated into json, but we need to give express the ability to read that json into something readable by node
5) now setup cors so it can HOST OUR SERVER LOCALLY with*/
    app.use(cors()) 
    /*and pull information from elsewhere for it... ya know.... like being able to Share Resources from Different Origins
6) now we must set up the ability for the app to listen so it can run the server with nodemon with  */
    app.listen(4004, () => console.log('now listening to port 4004')) /*
7) Finally it is time to run the server by running*/
    nodemon /{filepath to server file}
    /*nodemon is installed globally so it needs direction to get to the server file
8) now we grab the base URL from our front end which is located in the js file. This is just the base URL for our API and 
we use it direct our backend when we make a request. We are giving it a page to kinda use as a starting point. */
    app.get('/api/movies') 
    /*this goes in the server.js file between the app.use(cors()) and the app.listen... then go to controller 

The server is now setup  at the very least and can run the various node modules needed for the project. Now it is time to set up our controller file In that same server folder make the controller.js file and give the file access to the db.json which is basically an array of different objects whether it's movies, houses, users, etc, we want to be able to read that array and gether all the information associated with it. This information would otherwise be stored in a database (or API I think) but today it is in db.json (database) 

1) to setup our acess to the json file for its info we type:*/
    const {objectName} = require('./db.json') /*
  This stores the objects we are accessing to an easily stored variable. 'objectName should just be whatever type of data you're accessing.
2) Next we set up the module.exports with the necessary functions (get, create, delete, update, etc), which we will do every time we set up a controller file with: */
    module.exports = {

    }                                                                                                 /*
3) first we do the get functions which just grabs all the movies in the database and sends them to the frint end with */
module.exports = {  //this says that we are using a model on this block of code. Exposing the objects to the module
  getObject: (req, res) =>{     // defines the function and passes through the client request & the server response 
    res.status(200).send({objectName}) //this is the response 'status 200' (success) as well as the Objects
  }
}  
  //Now we need to set this function up in the server file too. Navigate back and type (under the setup stuff @ the top)
  const controller = require ('./controller')   //indicates we need the controller file for the following function
  const {getObject} = controller   //destructure the first function from the controller file and save it to a function here
  
  app.get('/api/movies', getObect)    //Now we add it to the ENPOINT by simply passing it to the end.
  /* Now we have it set up so when we say getObject it looks to the controller file line, finds the controller file because that is where we directed it and then runs the function there. 