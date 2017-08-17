var mongoose = require ('mongoose');
var Schema = mongoose.Schema;


//Create schema
var taskSchema = new Schema ({
	name :  {
		type: String,
		required : [true, 'Name Field is required']

	},
	dueDate : {
		type: Date,
		required : [true, 'DueDate Field is required']
	},
	priority : {
		type: Number,
		require : [true, 'Priority Field is required'],
		min : [1, 'Priority should start at 1'],
		max : [5, 'Priority should not be more than 5']
	},
	createdAt : {
		type: Date,
		required : false
	},
	updatedAt : {
		type: Date,
		required : false
	}
});

var Task = mongoose.model('task', taskSchema);

module.exports = Task;
