var app = angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : '///D:/Tingkering/ang-exer/content-13.html'
	})
	.when('/anotherPage',{
		template : 'Welcome User in other page!'
	})
	.otherwise({
		redirectTo : '/'
	});
});