
create new project folder

-npm init -y
add server.js
npm install express mongoose
npm install cors
npx create-react-app client

-Client
    npm install axios
    npm install react-router-dom

/client/src
    -views
        as many views as unique display pages
    -components
        reusable, functional pieces of code


-Server
    -controllers
    -routes
    -config
    -models


_____________________________________________________________________________________________________
{server/server.js:}

<!-- import dependencies -->
const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
<!-- connect to mongodb -->

<!-- configure express -->

<!-- connect routes -->

<!-- start the express server -->
app.listen(port, () => console.log(`Listening on port: ${port}`) );


_____________________________________________________________________________________________________
{server/config/mongoose.config.js}

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));


_____________________________________________________________________________________________________
{server/model/person.model.js}

const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);


_____________________________________________________________________________________________________
{server/controller/person.controller.js}

const { Person } = require('../models/person.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    // The method below is new
module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}