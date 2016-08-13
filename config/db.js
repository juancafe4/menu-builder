"use strict"

const env = require('dotenv')
const mysql = require('mysql')

const connection = mysql.createConnection(process.env.JAWSDB_URL ||{
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'restaurantdb' })


connection.connect();

module.exports = connection;