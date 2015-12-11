var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){

$scope.val=1;	
	$scope.odd=true;
	$scope.increment=function(){
		$scope.val+=1;
		$scope.even=$scope.val%2==0;
		
	}
	
})
	
