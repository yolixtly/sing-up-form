angular.module('myForm', ['ngMocks'])
.directive('optIn', function(){
	return {
		restrict : 'E',
		transclude : true,
		templateUrl : '../views/optin-template.html',
		replace : true
	};
});
