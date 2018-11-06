//this is where we work with requests and responses (req and res)
//model calls, express call
//NO DATABASE CODE HERE

//all database code is pushed out into other models

var express = require("express");

var router = express.Router();

//What we are responding to the client with when they send requests to our server
//the router is getting all of the html requests ("/") and responding when the user..
//requests anything
//WE CAN GET A CAT
router.get("/", function (req, res) {
    //we're calling on the cat database to intereact with the user
    cat.all(function (data) {
        var hbsobject = {
            cats: data
        };
        //it then renders what the request is 
        console.log(hbsobject);
        res.render("index", hbsobject);
    })
});

//creating a cat
//WE CAN POST/CREATE A CAT
router.post("api/cats", function (req, res) {
    cat.create([
        "name", "sleepy"]), [req.body.name, req.body.sleepy], function
    (result) {
        //send back the id of the new quote (new cat)
        res.json({id: result.insertId});
    }
res.sendFile(path.join(__dirname, ""))
});

//WE CAN UPDATE A CAT
router.put("/api/cats/:id", function (req, res) {
var consition = "id = " + req.params.id;
console.log("condition", condition)
})