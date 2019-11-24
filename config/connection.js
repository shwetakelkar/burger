var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"us-cdbr-iron-east-05.cleardb.net",
    port:"3306",
    user:"b03a88883b49db",
    password:"b3428266",
    database:"heroku_8d253770605796e"
})

connection.connect(function(err){
    if(err){throw err}
    else{
        console.log("connection is Successful !!")
    }
})

module.exports = connection;