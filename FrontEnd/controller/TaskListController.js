appAngular.controller('listController', ['$scope','$http', function($scope,$http){

	$scope.message = '';

	$scope.pendingList = [];
	$scope.overdueList = [];

	var refresh = function(){
	$http.get('/task').then(function(response){
		var taskList = response.data;
		angular.forEach(taskList,function(task){
			var date = new Date();
			var taskDate = new Date(task.dueDate);
			if(date.getTime() > taskDate.getTime()){
				$scope.overdueList.push(task);
			}else{
				$scope.pendingList.push(task);
			}
		});
		
	});
 	};

 	refresh();
    
 $scope.propertyName = 'name';
  $scope.reverse = true;

  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };

	
	

}]);