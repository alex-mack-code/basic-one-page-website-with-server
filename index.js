//require express
const express = require("express");
const app = express();

//require server utilities
const myServerUtilities = require('./serverUtilities')

// setup http server to listen on HTTP_PORT
app.listen(myServerUtilities.getHttpPort(), myServerUtilities.onHttpStart());