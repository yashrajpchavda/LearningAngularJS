var myApp = angular.module( 'myApp', [] );

myApp.controller( 'mainController', [ '$scope', '$filter', '$log', function( $scope, $filter, $log ) {
    "use strict";

    $scope.myHandle = '';

    $scope.lowercaseHandle = function() {
        return $filter( 'lowercase' )( $scope.myHandle );
    };

    $scope.$watch( 'myHandle', function( newValue, oldValue ) {

        $log.info( 'changed' );
        $log.log( 'old: ' + oldValue );
        $log.log( 'new: ' + newValue );

    } );

    setTimeout( function() {

        $scope.$apply( function() {

            $scope.myHandle = 'somethingnew';
            console.log( 'scope changed !' );

        } );


    }, 3000 );

} ] );
