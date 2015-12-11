var app=angular.module('myApp',[]);
app.service('myService',function(){
	var product={
		name:'',
		price:''
	};
	return product;
});

app.controller('myCtrl1',['$scope','myService',function($scope,myService){
	
	$scope.product=myService;

	
}]);

app.controller('myCtrl2',['$scope','myService',function($scope,myService){
	
	$scope.product=myService;
	
}]);

app.filter('titleCase', function() {
	return function(input) {
		input = input || '';
		return input.replace(/\w\S*/g, function(txt){
			return txt.charAt(0).toLowerCase() + txt.substr(1).toUpperCase();
			});
	};
});