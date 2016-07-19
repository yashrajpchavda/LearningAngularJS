var myApp = angular.module( 'myApp', [] );

myApp.controller( 'mainController', [ '$scope', '$timeout', function( $scope, $timeout ) {

    $scope.name = 'Jimmy';

    $timeout( function() {

        $scope.name = 'Everybody';

    }, 3000 );

} ] );
