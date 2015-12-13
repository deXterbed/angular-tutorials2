var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController3', ['$scope', function($scope){
  $scope.alertClick = function(){
    console.log('clicked');
  }

  $scope.name = 'John'
}])

myApp.controller('mainController2', ["$scope", "$log", "$filter", "$timeout", "$http", function($scope, $log, $filter, $timeout, $http){
  $scope.handle = ''

  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.handle);
  }

  $scope.characters = 5

  // var rulesrequest = new XMLHttpRequest();
  // rulesrequest.onreadystatechange = function(){
  //   $scope.$apply(function(){
  //     if (rulesrequest.readyState == 4 && rulesrequest.status == 200){
  //       $scope.rules =  JSON.parse(rulesrequest.responseText);
  //     }
  //   });
  // }

  // rulesrequest.open("GET", "http://localhost:3000/api", true);
  // rulesrequest.send();

  $http.get('/api')
    .success(function(result){
      $scope.rules = result;
    })
    .error(function(data, status){
      console.log(data);
    });

  $scope.newRule = ''

  $scope.addRule = function() {
    $http.post('/api', {newRule: $scope.newRule})
      .success(function(result){
        $scope.rules = result;
        $scope.newRule = '';
      })
      .error(function(data, status){
        console.log(data);
      })
  }

  $scope.rules = [
    {rulename: "Must be 5 characters"},
    {rulename: "Must not be used elsewhere"},
    {rulename: "Must be cool"}
  ];

  $scope.$watch('handle', function(newValue, oldValue){
    console.info('Changed!');
    console.log("Old:" + oldValue);
    console.log("New:" + newValue);
  });

  setTimeout(function(){
    $scope.$apply(function(){
      $scope.handle = 'newtwitterhandle'
      console.log('Scope changed!');
    });
  }, 3000);
}]);

myApp.controller('mainController1', ["$scope", "$log", "$filter", "$timeout", function($scope, $log, $filter, $timeout){
  $scope.name = 'John';
  $scope.occupation = "Coder";

  $scope.getname = function(){
    return 'John';
  }
  console.log($filter('uppercase')($scope.name));
  $log.log($scope);

  $timeout(function(){
    $scope.name = 'Everybody';
  }, 3000)
}]);
