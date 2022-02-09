## Set Up Project

In **root directory**

```bash
  npm init
```

### Install Dependencies

In **root directory**

```bash
  npm i express express-graphql nodemon --save
  npm i json-server axios --save
```

### Edit Files

#### `package.json`

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

---

### Run Locally

| Location | Command               | Runs       | URL                             | Access   |
| :------- | :-------------------- | :--------- | :------------------------------ | :------- |
| /root    | `npm run dev:server`  | **Server** | *http://localhost/4000/graphql* | GraphiQL |
| /root    | `npm run json:server` | **Both**   | *http://localhost/3000*         | Docs     |


Start **both servers** and navigate to *http://localhost:4000/graphql* to make queries/mutations
