var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else if(process.env.CLEARDB_URL){
    // Database is ClearDB on Heroku
    connection = mysql.createConnection(process.env.CLEARDB_URL);
}else{
    // Database is local
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: process.env.LOCAL_HOST_USER,
        password: process.env.LOCAL_HOST_PASSWORD,
        database: LOCAL_HOST_DB
    })
};

//var connection = mysql.createConnection(source.jawsDB);
connection.connect(function(err){
    if(err){throw err}
    else{
        console.log("connection is Successful !!")
    }
})

module.exports = connection;