// MODULE
var weatherApp = angular.module( 'weatherApp', [ 'ngRoute', 'ngResource' ] );

// ROUTE CONFIG
weatherApp.config( [ '$routeProvider', function( $routeProvider ) {
    'use strict';

    $routeProvider

    .when( '/', {

        templateUrl: 'pages/home.html',
        controller: 'homeController'

    } )

    .when( '/forecast', {

        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'

    } )

    .when( '/forecast/:days', {

        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'

    } );

} ] );

// CONTROLLERS
weatherApp.controller( 'homeController', [ '$scope', function( $scope ) {
    'use strict';

} ] );

weatherApp.controller( 'forecastController', [ '$scope', '$routeParams', function( $scope, $routeParams ) {
    'use strict';

    $scope.days = $routeParams.days || 1;

} ] );
