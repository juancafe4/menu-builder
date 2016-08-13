//Initialize enirioment variables
if (!process.env.JAWSDB_URL)
  require('dotenv').config();

//Setting up modules
const express = require ('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser')
const app = express();

//Port
const port = process.env.PORT || 8000;

//VIEW CONFIGURATION
// app.set('view engine', 'ejs')
//app.set('views', './views') We do not need it because it is set to default
//MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))