const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql')

// Hardcoded data
// const customers = [
//   {id: "1", name: 'John Doe', email: 'jdoe@gmail.com', age: 35},
//   {id: "2", name: 'Steve Smith', email: 'steve@gmail.com', age: 22},
//   {id: "3", name: 'Jane Doe', email: 'janedoe@gmail.com', age: 32},
// ]

const CustomerType = new GraphQLObjectType({ // Customer Object
  name: 'Customer', // called Customer
  fields: () => ({
    id: {type: GraphQLString}, // Has an ID that is of type String
    name: {type: GraphQLString}, // Has a name that is of type String
    email: {type: GraphQLString}, // Has an email that is of type String
    age: {type: GraphQLInt} // Has an age that is of type Integer
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: { // Searching for a single customer by their ID
      type: CustomerType, // Returns type of Customer
      args: { // the argument(s) the query takes
        id: {type: GraphQLString} // id with type string
      },
      resolve(parentValue, args){
        // for (let i = 0; i < customers.length; i++) { // Loops through customers
        //   if (customers[i].id === args.id) {
        //     return customers[i];
        //   }
        // }
        return axios.get(`http://localhost:3000/customers/${args.id}`).then(res => res.data)
      }
    },
    customers: { // Searching for ALL customers
      type: new GraphQLList(CustomerType), // Returns a list of Customers
      resolve(parentValue, args){
        return axios.get(`http://localhost:3000/customers/`).then(res => res.data)
      }
    }
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCustomer:{ // Add a Customer
      type: CustomerType,
      args:{
        name: {type: new GraphQLNonNull(GraphQLString)}, // makes it required
        email: {type: new GraphQLNonNull(GraphQLString)},
        age: {type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve(parentValue, args){
        return axios.post('http://localhost:3000/customers', {
          name: args.name,
          email: args.email,
          age: args.age
        }).then(res => res.data)
      }
    },
    deleteCustomer:{ // Delete a Customer
      type: CustomerType,
      args:{
        id: {type: new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentValue, args){
        return axios.delete('http://localhost:3000/customers/' + args.id).then(res => res.data)
      }
    },
    editCustomer:{ // Edit a Customer
      type: CustomerType,
      args:{
        id: {type: new GraphQLNonNull(GraphQLString)},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLString}
      },
      resolve(parentValue, args){
        return axios.patch('http://localhost:3000/customers/' + args.id, args).then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({ // Creates a new Schema
  query: RootQuery, // "Root Types" is query as RootQuery
  mutation
})


// QUERIES on GRAPHIQL

// Customer Query:
  // {
  //   customer(id:"1") {
  //     name,
  //     email,
  //     age
  //   }
  // }

// Data Returned
  // {
  //   "data": {
  //     "customer": {
  //       "name": "John Doe",
  //       "email": "jdoe@gmail.com",
  //       "age": 35
  //     }
  //   }
  // }

// Customers Query
  // {
  // 	customers{
  //     name
  //   }
  // }

// Data Returned
  // {
  //   "data": {
  //     "customers": [
  //       {
  //         "name": "John Doe"
  //       },
  //       {
  //         "name": "Steve Smith"
  //       },
  //       {
  //         "name": "Jane Doe"
  //       }
  //     ]
  //   }
  // }
