var app = angular.module('myForm', []);

app.directive('optIn', function(){
	return {
		restrict : 'E',
		transclude : true,
		templateUrl : '../views/optin-template.html',
		replace : true
	};
});
