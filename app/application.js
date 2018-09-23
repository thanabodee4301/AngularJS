  var footballApi = angular.module("footballApi", ["ngRoute"]);
      footballApi.config(function ($routeProvider) {
          $routeProvider
              .when("/home", {
                  templateUrl: "view/home.html",
                  controller: 'mainController'
              })
              .when('/',{
                  templateUrl:'view/home.html',
                  controller:'mainController'
              })
              .when("/about", {
                  templateUrl: "view/about.html",
                  controller: "aboutController"
              })
              .when("/home/:league_slug/scorer",{
                  templateUrl:'view/scorer.html',
                  controller:'scorerController'
              })
              .when('/home/:league_slug',{
                  templateUrl:'view/detail.html',
                  controller:'standings'
              })
              .when('/round/:league_slug/:team_identifier',{
                  templateUrl:"view/league.html",
                  controller:"matchController"
              })
              .when('/detail/:league_slug/:position',{
                  templateUrl:'view/overall.html',
                  controller:'detailController'
              })
              .when('/login',{
                  templateUrl:'view/login.html',
                  controller:"loginController"
              })
              .when('/register',{
                  templateUrl:'view/register.html',
                  controller:'registerController'
              })
              .otherwise({
                redirectTo:'/'
              });
        })
       