var app = angular.module('myForm', []);

app.directive('optIn', function(){
	return {
		restrict : 'E',
		transclude : true,
		templateUrl : './app/views/optin-template.html',
	}
});
