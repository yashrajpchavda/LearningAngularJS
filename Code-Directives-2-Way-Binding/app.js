var myApp = angular.module( 'myApp', [] );

myApp.controller( 'mainController', [ '$scope', '$filter', function( $scope, $filter ) {
    "use strict";

    $scope.myHandle = '';

    $scope.lowercaseHandle = function() {
        return $filter( 'lowercase' )( $scope.myHandle );
    };

} ] );
