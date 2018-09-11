//angular.module('myApp')

/*
footballApi.controller("tableController",["$scope","$http","$routeParams",function($scope,$http){
    $scope.gettableData = function(league_slug){
        $http.get(`/api/show/${league_slug}/scorer`).success(function(res){
            $scope.result = res;
        })
            
    }
footballApi.controller("historyMatch",["$scope","$http","$routeParams",function($scope,$http){
    $scope.getmatchData = function(league_slug, team_identifier){
        $http.get(`/api/show/${league_slug}/${team_identifier}`)
        $scope.result = res;
    }
}])

}])

*/
/*
    $scope.standings = function (league_slug) {
        var league_slug = $routeParams.league_slug;
        $http.get(`/api/show/${league_slug}`).success(function (res) {
        $scope.result = res;
        });
    };

    $scope.scorer = function (league_slug) {
        var league_slug = $routeParams.league_slug
        $http.get(`/api/show/${league_slug}/scorer`).success(function (res) {
            $scope.result = res;
        });
    };

    $scope.round = function (league_slug,team_identifier) {
        var league_slug = $routeParams.league_slug;
        var team_identifier = $routeParams.id;
        $http.get(`/api/round/${league_slug}/${team_identifier}`).success(function (res) {
            $scope.result = res;
        });
    };

    $scope.detail = function (league_slug,position) {
        var league_slug = $routeParams.league_slug;
        var position = $routeParams.position;
        $http.get(`/api/check/${league_slug}/${position}`).success(function (res) {
            $scope.result = res;
        });
    };

*/