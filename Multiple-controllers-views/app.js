var myApp = angular.module( 'myApp', [] );

myApp.controller( 'mainController', [ '$scope', function( $scope ) {
    "use strict";

    $scope.name = 'main';

} ] );

myApp.controller( 'secondController', [ '$scope', function( $scope ) {
    'use strict';

    $scope.name = 'second';

} ] );
