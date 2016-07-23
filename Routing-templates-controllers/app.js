var myApp = angular.module( 'myApp', [ 'ngRoute' ] );

myApp.config( [ '$routeProvider', function( $routeProvider ) {
    'use strict';

    $routeProvider

    .when( '/', {

        templateUrl: 'pages/main.html',
        controller: 'mainController'

    } )

    .when( '/second', {

        templateUrl: 'pages/second.html',
        controller: 'secondController'

    } )

    .when( '/second/:num', {

        templateUrl: 'pages/second.html',
        controller: 'secondController'

    } );

} ] );

myApp.controller( 'mainController', [ '$scope', function( $scope ) {
    'use strict';

    $scope.text = 'this is main page';

} ] );

myApp.controller( 'secondController', [ '$scope', '$routeParams', function( $scope, $routeParams ) {
    'use strict';

    $scope.text = 'this is second page';

    $scope.num = $routeParams.num || 1;

} ] );
