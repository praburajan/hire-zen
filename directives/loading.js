'use strict';
var hireZen = hireZen || angular.module('hireZen', ['ngRoute','firebase', 'ngMessages']);

hireZen.directive('loadingButton', function () {
    return {
        restrict : 'AE',
        scope : {
            progress : '@',
            action : '&',
            progressText : '@'
        },
        transclude : true,
        templateUrl : 'directives/loadingButton.html'
    };
});