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

myApp.controller( 'mainController', [ '$scope', '$log', function( $scope, $log ) {
    'use strict';

    $scope.people = [ {
        name: 'James Anderson',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    }, {
        name: 'Jane Anderson',
        address: '458 Second St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    }, {
        name: 'Tony Alicea',
        address: '125 Third St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    } ];

    $scope.formatAddress = function( person ) {
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
    };

} ] );

myApp.controller( 'secondController', [ '$scope', '$routeParams', function( $scope, $routeParams ) {
    'use strict';


} ] );

myApp.directive( 'searchResult', function() {
    'use strict';

    return {

        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personObject: '=',
            formatAddressFunction: '&'
        }

    };

} );
