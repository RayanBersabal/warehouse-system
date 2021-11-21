# Warehouse Management App

![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-ISC-yellowgreen.svg)

<p align="center">
  <a href="https://nodejs.org/">
    <img alt="restfulapi" title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
    <img alt="PostgreSQL" title="Sequelize" src="https://concordatablog.files.wordpress.com/2016/06/sequelize-logo.png">
  </a>
</p>

----
## Table of contents
* [Prerequiste](#prerequiste)
* [Installation](#installation)
* [Documentation](#documentation)
* [License](#license)

## Prerequisite
- Node.js - Download and Install [Node.js](https://nodejs.org/en/) with [NVM](https://github.com/creationix/nvm) (Node Version Manager) - Simple bash script to manage multiple active node.js versions.
- PostgreSQL - Download and Install [PostgreSQL](https://www.postgresql.org/download/) - is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.
- Postman - Download and Install [Postman](https://www.getpostman.com/downloads) - Implementation with postman latest version.

## Tools
- Visual Code Studios [VSCode](https://code.visualstudio.com/docs/?dv=win)

## Installation
### Clone
```
$ git clone https://github.com/RayanBersabal/warehouse-system.git
$ npm install
```

### Create Environment Variable
Create new file .env on your favorite code editor, and copy paste this code below :
```
PORT ="YOUR SERVER PORT"

DB_HOST = "YOUR DB HOST"
DB_USER = "YOUR DB USER"
DB_PASS = "YOUR DB PASSWORD"
DB_NAME = "YOUR DB NAME'

JWT_KEY= "A SCRETKEY FOR JWT"
```
### Start Development Server
```
$ npm start
```

## Documentation

### USER Routes

#### POST Request
```
 1. "/register" => Create user and return token. 
    a. Required Body: 
       1) username: string
       2) email: string
       3) password: string

 2. "/login" => Log In user and return token. 
    a. Required Body:
       1) email: string
       2) password: string
```


### PRODUCT Routes

#### GET Request
```
 1. "/products" => Display products, with default pagination {page: 1, limit: 3}. 
    a. Options Query:
       1) search -> {input: search keywords}, search products that have {input} in their title.
       2) sortby -> {input: column name}, sort products based on {input} with default {id}.
       3) sort   -> {input: asc / desc}, sort products ascending or descending based on {input}.
       4) page	 -> {input: number}, display page based on {input}.
       5) limit  -> {input: number}, config how many product displayed on page.

 2. "/products/:id" => Display product with {id}.
```

#### POST Request
```
 1. "/products" => Create product and return inserted data.
    a. Required Header: { authorization : token }
    b. Required Body: 
       1) name: string
       2) stock: number
       3) price: number
       4) category: number
```

#### PUT Request
```
 1. "/products/:id" => Update product with {id} and return inserted data.
    a. Required Header: { authorization: token : Token }
    b. Required Body: 
       1) name: string
       2) description: string
       3) image: string //image url
       4) id_category: number
       5) quantity: number
 ```

#### PATCH Request
```
 1. "/products/quantity/" => Add or reduce product quantity with {id}.
    a. Required Header : { authorization: token }
    b. Required Body:
       1) act: add/reduce
       2) id: number
       3) value: number
```

#### DELETE Request
```
 1. "/products/:id" => Delete product with {id}.
    a. Required Header : { authorization: token }

```


### CATEGORY Routes

#### GET Request
```
 1. "'/category" => Display categories. 

 2. "/category/:id" => Display category with {id}.
```

#### POST Request
```
 1. "/category" => Create category and return inserted data.
    a. Required Header: { auth: token, username: username, email: email }
    b. Required Body: { name: string }
```

#### PUT Request
```
 1. "/api/category/{id}" => Update category with {id} and return inserted data.
    a. Required Header: { authorization: token }
    b. Required Body: { name: string }
```

#### DELETE Request
```
 1. "/category/:id" => Delete category with {id}.
    a. Required Header: { authorization: token }
```