/* Sample Controller */
app.controller('dController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get("./data/imdb250.json").then(function(response){
        $scope.info=response.data;
    });
    $scope.ranking=parseInt($routeParams.rank);
}]);
app.controller('lController', ['$scope', '$http', function($scope, $http){
    $http.get("./data/imdb250.json").then(function(response){
        $scope.info=response.data;
    });
}]);
app.controller('gController', ['$scope', '$http', function($scope, $http){
    $http.get("./data/imdb250.json").then(function(response){
        $scope.info=response.data;
    });
}]);