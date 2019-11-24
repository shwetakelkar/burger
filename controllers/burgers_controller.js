var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/Index",function(req,res){
    burger.getAllBurger(function(data){
        res.render("index",{allBurgers:data})
    });

});

router.post("/api/burgers",function(req,res){

    
    var burgerName = req.body.burger;
    
    burger.addBurger(burgerName,function(data){
           res.redirect("/Index"); 
    })

})

router.put("/api/burgers/:id",function(req,res){

    burger.updateBurgerInfo(req.body.devoured,req.params.id,function(data){

        res.render("index",{allBurgers:data})

    })

})


module.exports = router