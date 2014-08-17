/**
 * Created by thanhnguyen on 17/08/2014.
 */
app.controller('noteController', function($scope) {
    $scope.message = "";
    $scope.save = function() {
        return alert('Note saved !');
    };
    $scope.clear = function() {
        $scope.message = "";
    }
    $scope.left = function() {
        return 100 - $scope.message.length;
    };

})
