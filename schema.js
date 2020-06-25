// npm i graphql, axios

const axios = require('axios'); // Bring in Axios

// Bring in GraphQL dependencies
const {
    GraphQLSchema,
        GraphQLObjectType, // Creates Object
        GraphQLList, // Creates List
        GraphQLNonNull, // Creates Field that is required
            GraphQLString,
            GraphQLInt,
} = require('graphql');

// Hardcoded data
// const customers = [
//     { id: '1', name: 'G', email: 'g@gmail.com', age: 26 },
//     { id: '2', name: 'M', email: 'm@gmail.com', age: 30 },
//     { id: '3', name: 'B', email: 'B@gmail.com', age: 30 },
// ]

// Customer Object SCHEMA
const CustomerType = new GraphQLObjectType({
    name:'Customer',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        age: { type : GraphQLInt }
    })
})

// Root QUERY //
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        customer: { // Get a Single Customer
            type: CustomerType,
            args: {
                id: { type: GraphQLString } // by their ID
            },
            resolve(parentValue, args) {
                
                // Looping through hardcoded data
                // for (let i = 0; i < customers.length; i++) {
                //     if (customers[i].id === args.id) {
                //         return customers[i]
                //     }
                // }

                // Return the customer with the id passed in the query
                return axios.get('http://localhost:3000/customers/' + args.id)
                        .then(res => res.data);
            }
        },
        customers:{ // Get ALL Customers
            type: new GraphQLList(CustomerType), // Creates List of Customer Objects (from above)
            resolve(parentValue, args){
                // return customers;

                // Return all customers
                return axios.get('http://localhost:3000/customers/')
                    .then(res => res.data);
            }
        }
    }
});

// MUTATIONS //
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addCustomer:{
            type:CustomerType,
            args:{
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve(parentValue, args){
                return axios.post('http://localhost:3000/customers/', {
                    name:args.name, 
                    email:args.email,
                    age:args.age
                })
                .then(res => res.data)
            }
        },
        deleteCustomer: {
            type: CustomerType,
            args: {
                id:{type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args) {
                return axios.delete('http://localhost:3000/customers/' +args.id)
                    .then(res => res.data)
            }
        },
        editCustomer: {
            type: CustomerType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                name: { type: GraphQLString },
                email: { type: GraphQLString },
                age: { type: GraphQLInt },
            },
            resolve(parentValue, args) {
                return axios.patch('http://localhost:3000/customers/' + args.id, args)
                    .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation
})

// Single Customer Query
    // {
    //     customer(id:"1") {
    //        id
    //        name
    //        email
    //        age
    //     }
    // }
// Returns the { id, name, email and age } of a Single customer with the ID of "1"

// All Customers Query
    // {
    //     customers {
    //         id
    //         name
    //         email
    //         age
    //     }
    // }
// Returns the { id, name, email and age } of ALL customers