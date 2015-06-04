'use strict';
var hireZen = hireZen || angular.module('hireZen',['ngRoute','firebase','ngMessages']);
hireZen.directive('alertMsg', function () {
    return {
        scope : {
            message : '@',
            type : '@'
        },
        restrict : 'AE',
        templateUrl : 'directives/alert.html',
        link : function (scope, elem, attrs) {
            console.log('attr message === ' + attrs.message);
            console.log('attr type === ' + attrs.type);
        }
    };
});