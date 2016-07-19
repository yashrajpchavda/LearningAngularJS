var myApp = angular.module( 'myApp', [] );

myApp.controller( 'mainController', [ '$scope', '$filter', '$log', function( $scope, $filter, $log ) {
    "use strict";

    $scope.myHandle = '';

    $scope.lowercaseHandle = function() {
        return $filter( 'lowercase' )( $scope.myHandle );
    };

    $scope.characters = 5;

    $scope.rules = [ {
        ruleName: 'Must be 5 characters'
    }, {
        ruleName: 'Must not be used elsewhere'
    }, {
        ruleName: 'Must be cool!'
    } ];

} ] );
