//setup express
const express = require("express");
const app = express();

//setup folder path
var path = require("path");

//setup handlebars
const exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

//setup server utilities
const myServerUtilities = require('./serverUtilities')

// setup http server to listen on HTTP_PORT
app.listen(myServerUtilities.getHttpPort(), myServerUtilities.onHttpStart());

// route root to index
app.get("/", function(req,res)
{
    res.redirect('index');
});

// route server to index
app.get("/index", function(req,res)
{
    //setup data to pass to view
    var someData = {
        id: 1,
        name: "Alex MacKenzie",
        age: 32,
        description: "software developer",
    };
    
    res.render('index', {
        data: someData,
        layout: false // do not use the default Layout
    });
        
});

