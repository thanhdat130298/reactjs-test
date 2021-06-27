let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pet",
});
app.listen(port);

console.log("RESTful API server started on: " + JSON.stringify(mysql));
