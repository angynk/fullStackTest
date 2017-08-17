'use strict';

appAngular.service('taskService', ['$http', function($http){
	
	this.getAll = function(){
		$http.get('/contactlist').then(function(response){
		console.log(response);
		return response.data;
	});
	};

	this.addTask = function(){
		$http.post('/contactlist', $scope.contact ).then(function(response){
			
		});
	};	


 	
	};
}])