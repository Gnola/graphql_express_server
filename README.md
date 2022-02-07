# [GraphQL and Express Server (TM)](https://www.youtube.com/watch?v=PEcJxkylcRM&list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68&index=2)
- Node
- Express
- GraphQL
- Axios

## Set Up

### Initialize Project
`npm init`

### Dev Dependencies (`--save`)
- `npm i express`
- `npm i express-graphql`
- `npm i graphql`
- `npm i nodemon`
- `npm i json-server --save`
- `npm i axios`

### File Set Up
- In `package.json`

```json
/* Change this */
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}

/* To this */
"scripts": {
  "dev:server": "nodemon server.js",
  "json:server": "json-server --watch data.json"
}
```

### Starting Up
- `npm run dev:server` - 'localhost/4000/graphql' provides us with our graphiql interface
- `npm run json:server` - 'localhost/3000/customers' provides us with our data

---

### Additional Notes
- Does **not** use a DB
- Is **not** deployed anywhere
