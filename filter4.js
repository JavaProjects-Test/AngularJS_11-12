var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
});
app.filter('charLimit',function(){
	return function(input,length1){
		if(!length1){
			length=10;
		}
		if(input.length<=length1){
			return input;
		}
		else{
			
			return input.substring(0,length1)+"....";
		}
	}
	
});