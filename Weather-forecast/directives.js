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
