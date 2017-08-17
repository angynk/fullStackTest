// SERVER CONFIGURATION
var express = require ('express');
var routes = require ('./routes/restApi');
var mongoose = require ('mongoose');


var app = express();
/*var mongojs = require ('mongojs');
var db = mongojs('contactlist',['contactlist']);*/
var bodyParser = require('body-parser');

//Conect to MongoDB
mongoose.connect('mongodb://localhost/taskapp');
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + "/FrontEnd"));
app.use(bodyParser.json());
app.use(routes);
app.use (function(err,req,res,next){
	var httpCode = err.httpStatusCode;
	if(typeof err.httpStatusCode === 'undefined'){
		httpCode = 500;
	}
	res.status(httpCode).send({status: httpCode, errors: err.message });
});



//INIT SERVER
app.listen(3000);
console.log("Server running on port 3000");