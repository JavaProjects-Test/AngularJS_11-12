var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,chars){
	console.log(chars);
});
app.constant('chars',{attr:"this is attr value!!"});