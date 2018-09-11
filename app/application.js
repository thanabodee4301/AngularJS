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
              .when("home/:league_slug/scorer",{
                  templateUrl:'view/scorer.html',
                  controller:'detailController'
              })
              .when('/home/:league_slug',{
                  templateUrl:'view/detail.html',
                  controller:'standings'
              })
              .otherwise({
                redirectTo: "/",
            })
        })
        footballApi.controller('mainController',function($scope,$http) {
            $http.get( "/api/show", {} )
            .then(function(res) {
               $scope.total2 = res.data;
            });
        }
        );
        footballApi.controller('standings',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
          var league_slug = $routeParams.league_slug;
            $http.get(`/api/show/${league_slug}`,{})
            .then(function(res){
                $scope.total2 = res.data
            })
        }])
        footballApi.controller('scorerController',['$scope','$http','$routeParam',function($scope,$http,$routeParams){
            var league_slug = routeParams.league_slug;
            $http.get(`/api/show/${league_slug}/scorer`,{})
            .then(function(res){
                $scope.total2 = res.data
            })
        }])