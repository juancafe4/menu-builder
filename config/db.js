"use strict"

const env = require('dotenv')
const mysql = require('mysql')

const connection = mysql.createConnection( process.env.JAWSDB_URL || {
  host: process.env.MYSQL_HOST,
  user: process.env.MY_USER,
  password: process.env.MYSQL_PASSWORD,
  database:process.env.MYSQL_DATABASE
})


connection.connect();

module.exports = connection;