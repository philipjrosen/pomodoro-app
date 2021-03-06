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

    $scope.removeActivity = function(activity) {
      activitiesFactory.delete(activity)
      .success(function (data) {
        $scope.activities.forEach(function (item, i, arr) {
          if (item._id === data.activityId) {
            arr.splice(i,1);
          }
        });
      })
      .error(function(error) {
        console.log('Unable to delete activity: ' + error.message);
      });
    };

    $scope.updateActivity = function(activity) {
      activitiesFactory.put(activity)
      .success(function (data) {
        console.log("data:", data);
      })
      .error(function(error) {
        console.log('Unable to delete activity: ' + error.message);
      });
    };
}]);
