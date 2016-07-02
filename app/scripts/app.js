'use strict';

/**
 * @ngdoc overview
 * @name rockpaperscissorsgameApp
 * @description
 * # rockpaperscissorsgameApp
 *
 * Main module of the application.
 */
angular
  .module('rockpaperscissorsgameApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/game.html',
        controller: 'GameCtrl',
        controllerAs: 'game'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
