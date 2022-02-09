# GraphQL and Express Server

This app is a server with basic CRUD functionality that utilizes the **json-server API** and works with **local data**

### Frontend

This project does **not** have a frontend.

### Backend

#### Node / Express

#### GraphQL

### Databases

This project does **not** use a DB

### API / Data

#### Axios
- `axios.get()`
- `axios.post()`
- `axios.delete()`
- `axios.patch()`

#### [json-server](https://github.com/typicode/json-server)

Manipulates **local** `data.json` file

| Type         | Query/Mutation                        | End Point                     | Functionality         |
| :----------- | :------------------------------------ | :---------------------------- | :-------------------- |
| **Query**    | `customers`                           | *localhost:3000/customers*    | Get all customers     |
| **Query**    | `customer(id)`                        | *localhost:3000/customers/id* | Get a single customer |
| **Mutation** | `addCustomer(name!, email!, age!)`    | *localhost:3000/customers*    | Add a customer        |
| **Mutation** | `deleteCustomer(id!)`                 | *localhost:3000/customers/id* | Delete a customer     |
| **Mutation** | `editCustomer(id!, name, email, age)` | *localhost:3000/customers/id* | Edit a customer       |


### Deployment

This project is **not** deployed

---

### Related

Here are some related projects

[Awesome README](https://github.com/matiassingers/awesome-readme)

---

### Resources
- [GraphQL and Express Server (TM)](https://www.youtube.com/watch?v=PEcJxkylcRM&list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68&index=2)
