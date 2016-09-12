// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });

var app = angular.module('starter');
app.controller('tipController', function ($scope) {
    $scope.inputs = [];
    $scope.tenPercent = function () {
        let result = $scope.inputs.join('') * 10 / 100;
        return result === 0 ? '' : result;
    };
    $scope.fifteenPercent = function () {
        let result = $scope.inputs.join('') * 15 / 100;
        return result === 0 ? '' : result;
    };
    $scope.press = function (input) {
        console.debug('Provided input:', [input]);
        $scope.inputs.push(input);
    };
    $scope.reset = function () {
        $scope.inputs = [];
    };
});