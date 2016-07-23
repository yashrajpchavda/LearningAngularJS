var myApp = angular.module( 'myApp', [] );

myApp.controller( 'mainController', [ '$scope', '$filter', '$log', '$http', function( $scope, $filter, $log, $http ) {
    "use strict";

    $scope.myHandle = '';

    $scope.lowercaseHandle = function() {
        return $filter( 'lowercase' )( $scope.myHandle );
    };

    $scope.characters = 5;

    var url = 'https://www.whizapi.com/api/v2/util/ui/in/indian-states-list?project-app-key=7c7haq4xzbrmyq97duoh1bx2';

    $http.get(url)
        .success( function( response ) {

            $scope.cities = response.Data;

        } )
        .error( function() {

        } );

} ] );
