angular.module('pomodoroApp')
.controller('ActivitiesController', ['$scope', 'activitiesFactory',

  function($scope, activitiesFactory) {
    $scope.activities = [];

    $scope.init = function() {
      activitiesFactory.getActivities()
      .success(function(activities) {

        $scope.activities = activities;

      });
    };

    //load activities when app starts
    $scope.init();

    $scope.addActivity = function(activity) {
      activitiesFactory.post({name: activity})
      .success(function (data) {

        $scope.activities.push(data);
        document.querySelector('input[type="text"]').value = "";

      })
      .error(function(error) {
        console.log('Unable to insert activity: ' + error.message);
      });
    };
}]);

function logger(arr) {
  arr.forEach(function(item) {
    console.log(item.name);
  });
}
