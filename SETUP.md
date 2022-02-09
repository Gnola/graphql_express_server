## Set Up Project

In **root directory**

```bash
  npm init
```


### Install Dependencies ???????

### Dev Dependencies (`--save`)
- `npm i express`
- `npm i express-graphql`
- `npm i graphql`
- `npm i nodemon`
- `npm i json-server --save`
- `npm i axios`


In **root directory**

```bash
  npm i express express-graphql graphql
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

### Run Locally

| Command               | Location  | What       | URL                               | Access   |
| :-------------------- | :-------- | :--------- | :-------------------------------- | :------- |
| `npm run dev:server`  | **root**  | **Server** | *http::/localhost/4000/graphql*   | GraphiQL |
| `npm run json:server` | **root**  | **Both**   | *http::/localhost/3000/customers* | Data     |
