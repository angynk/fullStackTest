appAngular.controller('taskController', ['$scope','$http', function($scope,$http){

	$scope.message = '';
	$scope.task = {
	};

	$scope.taskList = [];

	var refresh = function(){
	$http.get('/task').then(function(response){
		$scope.taskList = response.data;
		$scope.task = {};
	});
 	};

 	refresh();
    
	$scope.addTask = function(){

		$http.post('/task/create', $scope.task ).then(function(response){
			refresh();
		});

	};

	$scope.remove = function (id){
		$http.delete('/task/destroy/' + id ).then(function(response){
			refresh();
		});

	};

	$scope.edit = function(id){
		$http.get('/task/' + id ).then(function(response){
			$scope.task = response.data;
		});
	};

	$scope.update = function (){
		$http.put('/task/update/' + $scope.task._id, $scope.task ).then(function(response){
			refresh();
		});
	};
	
	

}]);