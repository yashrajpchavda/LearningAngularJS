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

// SERVICES
weatherApp.service( 'cityService', function() {
    'use strict';

    this.city = 'New York, NY';

} );

// CONTROLLERS
weatherApp.controller( 'homeController', [ '$scope', 'cityService', function( $scope, cityService ) {
    'use strict';

    $scope.city = cityService.city;

    $scope.$watch( 'city', function() {

        cityService.city = $scope.city;

    } );

} ] );

weatherApp.controller( 'forecastController', [ '$scope', '$routeParams', 'cityService', function( $scope, $routeParams, cityService ) {
    'use strict';

    $scope.days = $routeParams.days || 1;

    $scope.city = cityService.city;

} ] );
