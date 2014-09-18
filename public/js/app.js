(function() {

  var app = angular.module('pomodoroApp', []);

  app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
    };
  });

}());