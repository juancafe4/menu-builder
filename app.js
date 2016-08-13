//Initialize enirioment variables
if (!process.env.JAWSDB_URL)
  require('dotenv').config();

//Setting up modules
const express = require ('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser')
const app = express();
const path = require('path')
//Port
const port = process.env.PORT || 8000;

//VIEW CONFIGURATION
// app.set('view engine', 'ejs')
app.set('views', './public')// We do not need it because it is set to default
//MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

app.use(express.static('public'));

app.use('/api/restaurant', require('./routes/restaurants'))
// app.use('/api/menu', require('./routes/menus'))

//Routes
app.get('*', (req, res) => {
  res.render(path.join(__dirname, 'public/index'));
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });


//Server listen
app.listen(port), err => {
  console.log(err || `Listenning at ${port}`);
}