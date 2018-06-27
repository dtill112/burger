var connect = require("./connection.js");

var orm =   {
    all: function(tableInput, cb){
connect.query('SELECT * FROM '+tableInput+';', function(err,result){
    if(err) throw err;
    cb(result)

        })   
    },

update: function(tableInput, condition, cb){
    connect.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', 
    function(err,result){
        if(err) throw err;
        cb(result);
    
        })
    },

    create: function(tableInput,val,cb){
        connect.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+val+"');", function(err, result){
            if(err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;