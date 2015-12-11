var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,val){
	console.log(val);
});
app.constant('val',function(){
	return "this is return from function!!"
});