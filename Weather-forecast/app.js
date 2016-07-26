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

// DIRECTIVES
weatherApp.directive( 'weatherReport', function() {
    'use strict';

    return {

        restrict: 'E',
        templateUrl: 'directives/weatherReport.html',
        replace: true,
        scope: {
            weatherObject: '=',
            convertToDate: '&',
            convertToCelsius: '&'
        }

    };

} );

// CONTROLLERS
weatherApp.controller( 'homeController', [ '$scope', 'cityService', function( $scope, cityService ) {
    'use strict';

    $scope.city = cityService.city;

    $scope.$watch( 'city', function() {

        cityService.city = $scope.city;

    } );

} ] );

weatherApp.controller( 'forecastController', [ '$scope', '$resource', '$filter', '$routeParams', 'cityService', function( $scope, $resource, $filter, $routeParams, cityService ) {
    'use strict';

    $scope.days = $routeParams.days || '2';

    $scope.city = cityService.city;

    var url = 'http://api.openweathermap.org/data/2.5/forecast/daily';

    $scope.weatherAPI = $resource( url, {
        callback: 'JSON_CALLBACK',
        mode: 'json',
        appid: '1194c78cf977ead96fd4ba9e8b37ac5b'
    }, {
        get: {
            method: 'JSONP'
        }
    } );

    $scope.weatherResults = $scope.weatherAPI.get( {
        q: $scope.city,
        cnt: $scope.days
    } );

    $scope.convertToCelsius = function( degK ) {

        return Math.round( degK - 273.15 );

    };

    $scope.convertToDate = function( dt ) {

        return $filter( 'date' )( new Date( dt * 1000 ), 'MMM d, yyyy' );

    };

} ] );
