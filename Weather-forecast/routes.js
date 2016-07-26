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
