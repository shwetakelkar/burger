var orm = require("../config/orm.js");

var burger={
getAllBurger: function(resFunction){

    orm.selectAll("burgers",function(data){
        resFunction(data);
    });
},
addBurger:function(valOfCol,resFunction){
    orm.insertOne("burgers","burger_name",valOfCol,function(data){
        resFunction(data);
    });
},

updateBurgerInfo:function(valOfCol,valOfId,resFunction){
    orm.updateOne("burgers","devoured", valOfCol,valOfId,function(data){
        resFunction(data)
    });
}

}

module.exports=burger;

