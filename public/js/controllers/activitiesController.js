(function() {

  var ActivitiesController = function($scope, activitiesFactory) {
    $scope.activities = [];

    activitiesFactory.getActivities()
      .success(function(activities){
        $scope.activities = activities;
        activities.forEach(function(activity) {
          console.log(activity.name);
        });
      });
  };

  ActivitiesController.$inject = ['$scope', 'activitiesFactory'];

  angular.module('pomodoroApp')
    .controller('ActivitiesController', ActivitiesController);

}());
