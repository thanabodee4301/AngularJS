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
        $scope.league_slug=league_slug
    })
}])
footballApi.controller('scorerController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
    var league_slug = $routeParams.league_slug;
    $http.get(`/api/show/${league_slug}/scorer`,{})
    .then(function(res){
        $scope.total2 = res.data
    })
}])

footballApi.controller('detailController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
    var league_slug = $routeParams.league_slug;
    var position    = $routeParams.position;
    $http.get(`/api/check/${league_slug}/${position}`,{})
    .then(function(res){
        $scope.total2 = res.data
    })
}])

footballApi.controller('matchController',['$scope','$http','$routeParams',function($scope,$http,$routeParams){
    var league_slug = $routeParams.league_slug;
    var team_identifier = $routeParams.team_identifier;
    $http.get(`/api/round/${league_slug}/${team_identifier}`,{})
    .then(function(res){
        $scope.total2 = res.data
        $scope.league_slug = league_slug;
    })
}])