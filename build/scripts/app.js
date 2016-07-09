var app = angular.module('myForm', []);

app.run(function($rootScope){
  $rootScope.alert = function(){
    alert('You are been alerted!');
  };
});

app.directive('optIn', function(){
	return {
		restrict : 'E',
		transclude : true,
		templateUrl : '../views/optin-template.html',
		replace : true
	};
});

app.directive('myClick', function() {
		return function($scope, element, attrs) {
            element.on('click', function() {
                $scope.$apply(function() {
                    //fire the onClick function
                    $scope.$eval(attrs.myClick);
                });
            });
        };
	});
