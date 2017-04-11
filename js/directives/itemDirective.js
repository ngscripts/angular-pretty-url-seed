/**
 * Created by ulhaq on 4/10/2017.
 */
app.directive('itemBox', function () {
   return {
       restrict: 'E',
       scope: {
           data: '=item',
           callback: '&'
       },
       replace: false,
       template: '<div> item </div>',
       controller: function ($scope) {
           console.log($scope.item);
           $scope.callback($scope.item);
       }
   };
});