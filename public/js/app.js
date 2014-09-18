(function() {

  var app = angular.module('pomodoroApp', []);

  app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
    };
  });

  app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (e) {
        if(e.which === 13) {
          scope.$apply(function (){
            scope.$eval(attrs.ngEnter);
          });

          e.preventDefault();
        }
      });
    };
  });

}());