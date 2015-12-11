var app=angular.module('myApp',[]);
app.service('myService',function(){
	this.message="asdfghjkl";
	
});
app.controller('myCtrl1',['$scope','myService',function($scope,myService){
	$scope.message1="asdfghjk";
	myService=$scope.message;
}]);

app.controller('myCtrl2',['$scope','myService',function($scope,myService){
	$scope.message=myService.message;
}]);