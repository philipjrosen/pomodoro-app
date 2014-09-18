angular.module('pomodoroApp')
.controller('ActivitiesController', ['$scope', 'activitiesFactory',

  function($scope, activitiesFactory) {
    $scope.activities = [];

    $scope.init = function() {
      activitiesFactory.getActivities()

      .success(function(activities) {
        $scope.activities = activities;

        //log date from server to browser console
        logger(activities);

      });
    };

    //load activities when app starts
    $scope.init();

    $scope.addActivity = function(activity) {

      activitiesFactory.post({name: activity})
        .success(function (data) {
          //log date from server to browser console
          console.log(data);
        })
        .error(function(error) {
          console.log('Unable to insert customer: ' + error.message);
        });
    };
}]);

function logger(arr) {
  arr.forEach(function(item) {
    console.log(item.name);
  });
}
