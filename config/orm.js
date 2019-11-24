var connection = require("./connection.js");

var orm = {
    selectAll :function(table_name,cb){

        var query = "SELECT * FROM ??";
        connection.query(query,[table_name],function(err,data){
            if(err){
              throw err
            }
            else{
                cb(data);
            }

        });

    },
    insertOne: function(table_name,col_name,valOfCol,cb){

        var query = "INSERT INTO ?? (??) VALUES (?)"

        connection.query(query,[table_name,col_name,valOfCol],function(err,data){
            if(err){throw err}
            else{
                cb(data)
            }

        })

    },
    updateOne:function(table_name,col_name,valOfCol,valOfId,cb){

        var query = "UPDATE ?? SET ?? = ? WHERE id = ? ";
        connection.query(query,[table_name,col_name,true,valOfId],function(err,data){
            if(err){throw err}
            else{
                cb(data)
                console.log(data)
            }
        })

    }
}

module.exports= orm;