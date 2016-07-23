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

myApp.service( 'nameService', function() {
    'use strict';

    var _this = this;

    _this.name = 'James Anderson';
    _this.nameLength = function() {
        return _this.name.length;
    };

} );

myApp.controller( 'mainController', [ '$scope', '$log', 'nameService', function( $scope, $log, nameService ) {
    'use strict';

    $scope.text = 'this is main page';
    $scope.name = nameService.name;

    $scope.$watch( 'name', function() {

        nameService.name = $scope.name;

    } );

} ] );

myApp.controller( 'secondController', [ '$scope', '$routeParams', 'nameService', function( $scope, $routeParams, nameService ) {
    'use strict';

    $scope.text = 'this is second page';

    $scope.num = $routeParams.num || 1;

    $scope.name = nameService.name;

    $scope.$watch( 'name', function() {

        nameService.name = $scope.name;

    } );

} ] );
