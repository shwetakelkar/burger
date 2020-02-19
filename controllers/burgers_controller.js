var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

var dbName = process.env.CURRENT_DBNAME;

router.get("/Index",function(req,res){
    burger.getAllBurger(function(data){
        res.render("index",{allBurgers:data,db:dbName})
    });

});

router.post("/api/burgers",function(req,res){

    var burgerName = req.body.burger;
    if(burgerName != ""){
        burger.addBurger(burgerName,function(data){
            res.redirect("/Index"); 
        })
    }
})

router.put("/api/burgers/:id",function(req,res){

    burger.updateBurgerInfo(req.body.devoured,req.params.id,function(data){

        res.render("index",{allBurgers:data,db:dbName})

    })

})


module.exports = router