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
app.controller('tipController',function ($scope) {
    let tip = {
        bill: undefined,
        tenPercent: undefined,
        fifteenPercent: undefined,
        inputs: []
    }

    $scope.tip = tip;
    $scope.typed = function (input) {
        console.debug('Typed input:', [input]);
        tip.inputs.length = 0;
        computeTip(input);
    }
    $scope.press = function (input) {
        console.debug('Pressed number:', [input]);
        computeTip(input);
    };
    $scope.reset = function () {
        reset();
    };

    var reset = function () {
        tip.inputs.length = 0;
        tip.bill = 0;
        tip.tenPercent = 0;
        tip.fifteenPercent = 0;
    };

    var computeTip = function (input) {
        tip.inputs.push(input);
        let result = tip.inputs.join('') * 10 / 100;
        tip.tenPercent = result === 0 ? '' : result;
        result = tip.inputs.join('') * 15 / 100;
        tip.fifteenPercent = result === 0 ? '' : result;
        tip.bill = tip.inputs.join('');
    }
});