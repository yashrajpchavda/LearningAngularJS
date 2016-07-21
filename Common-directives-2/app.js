var myApp = angular.module( 'myApp', [] );

myApp.controller( 'mainController', [ '$scope', '$filter', '$log', function( $scope, $filter, $log ) {
    "use strict";

    $scope.name = 'Jimmy';

    $scope.btnClick = function() {
        alert( 'Clicked !' );
    }


} ] );
