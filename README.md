# Warehouse System

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
DB_USER = "YOUR DB USER"
DB_PASS = "YOUR DB PASSWORD"
DB_NAME = "YOUR DB NAME"
DB_HOST = "YOUR DB HOST"
SECRET_KEY_JWT = "A SCRETKEY FOR JWT"
PORT = "YOUR SERVER PORT"
```
### Start Development Server
```
$ npx sequelize db:create --> to create database
$ npx sequelize db:migrate --> to migrate database
$ npm start
```

## Documentation

### USER Routes

#### POST Request
```
 1. "/register" => Create user and return token. 
    a. Required Body:
       1) email: string
       2) password: string

 2. "/login" => Log In user and return token. 
    a. Required Body:
       1) email: string
       2) password: string
```


### ITEM Routes

#### GET Request
```
 1. "/items" => Display items 
    a. Options Query:
       1) search -> {input: search keywords}, search items that have {input} in their title.
       2) sort	 -> {input: price=low}, display data based on lowest price
       3) sort	 -> {input: price=high}, display data based on highest price
       4) sort	 -> {input: stock=low}, display data based on lowest stock
       5) sort	 -> {input: stock=high}, display data based on highest stock

 2. "/items/:id" => Display item with {id}.
```

#### POST Request
```
 1. "/items" => Create item and return inserted data.
    a. Required Header: { authorization : token.header.token }
    b. Required Body: 
       1) name: string
       2) stock: number
       3) price: number
       4) categoryId: number
```

#### PUT Request
```
 1. "/items/:id" => Update item with {id} and return inserted data.
    a. Required Header: { authorization: token.header.token }
    b. Required Body: 
       1) name: string
       2) stock: number
       3) price: number
       4) categoryId: number
 ```

#### DELETE Request
```
 1. "/items/:id" => Delete item with {id}.
    a. Required Header : { authorization: token.header.token }

```


### CATEGORY Routes

#### GET Request
```
 1. "'/categories" => Display categories. 

 2. "/categories/:id" => Display category with {id}.
```

#### POST Request
```
 1. "/categories" => Create category and return inserted data.
    a. Required Header: { auth: token, email: email, password: password }
    b. Required Body: { name: string }
```