var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	$scope.myData={val:"jake"};
	
	$scope.$watch("myData.val",function(newVal){
$scope.myData.toolong=newVal.length>15;
	});
		
		
	
});