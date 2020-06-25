// npm i express, express-graphql, nodemon, json-server

const express = require('express'); // Bring in Express
const expressGraphQL = require('express-graphql'); // Bring in Express+GraphQL connector

const schema = require('./schema.js'); // Bring in Schema/Queries

// Run Express
const app = express();

// Use '/graphql' endpoint
app.use('/graphql', expressGraphQL({
    schema:schema, // use schema
    graphiql:true // use graphiql tool
}))

// Set up Express Server at Port 4000 - not deploying so no need to make PORT variable
app.listen(4000, ()=>{
    console.log('Server is running on port 4000...');
})

// http://localhost:4000/graphql --> Shows Graphiql used for Queries and Mutations
    // Port 4000 comes from above
    // set 'graphql' as endpoint
    // start dev server w/ nodemon server.js or script created in package.json

// http://localhost:3000/customers --> Shows JSON data from data.json
    // Port 3000 comes from json-server docs
    // 'customers' comes from data.json array name
    // start json-server with json-server --watch data.json or script created in package.json
