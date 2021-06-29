const express = require('express')
const app = express();
const con = require('./db')
require('dotenv').config()
const port = process.env.DB_PORT || 3000;
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

let routes = require('./routes') //importing route
routes(app)
con.connect(function(err) {
  if (err) console.log("---------",err) ;
  else console.log("----------------Connected!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
});
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})
app.listen(port);
