var express = require ('express');
var router = express.Router();
var mongoose = require('mongoose');
var Task = require ('../model/task');

//REST API

/*router.param('id',function(req,res,next,idf){
	var id = req.params.id;
	if(id.match(/^[0-9a-fA-F]{24}$/)){
		Task.findOne({_id: id}).then(function(e,task){
			console.log(task);
		if (!task){
			var err = new Error ('No data for this id: '+id);
			err.httpStatusCode = 404;
			console.log(err);
			return next( err );
		} 
		//req.task = task;

		console.log("aqui");
		
	});
	}else{
		var err = new Error ('Id Missing or invalid Id');
		err.httpStatusCode = 400;
		return next( err );
	}
	
});*/

router.get('/task',function(req,res,next){
	Task.find({}).then(function(tasks){
		res.send(tasks);
	});
	

});

router.post('/task/create',function(req,res,next){
	req.body.createdAt = new Date();
	req.body.updatedAt = new Date();

	Task.create(req.body).then(function(task){
		res.send(task);
	}).catch(next);
	
	

});


router.delete('/task/destroy/:id', function(req,res,next){

	var id = req.params.id;
	Task.findByIdAndRemove({_id: id}).then(function(task){
		res.send(task);
	});

});
Task

router.get('/task/:id', function(req,res,next){
var id = req.params.id;
Task.findOne({_id:id}).then(function(task){
			res.send(task);
}).catch(next);

});

router.put('/task/update/:id', function(req,res,next){
	var id = req.params.id;
	req.body.updatedAt = new Date();
	Task.findByIdAndUpdate({_id:id},req.body).then(function(task){
		Task.findOne({_id:id}).then(function(task){
			res.send(task);
		}).catch(next);
		
	}).catch(next);
});

module.exports =  router;