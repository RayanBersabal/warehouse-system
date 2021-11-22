require('dotenv').config();
module.exports =  {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "db_test_glints",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "protocol": "postgres",
    "dialect": "postgres"
  }
}
