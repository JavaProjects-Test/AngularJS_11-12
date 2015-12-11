var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	$scope.number=[1,2,3,4,5,1,2,4,6,2,3 ];
});

app.controller('myCtrl1',function($scope){
	
	$scope.names=[{name:'Sahil', age:21},{name:'Rohit',age:22},{name:'Sumit', age:23}]
	
})