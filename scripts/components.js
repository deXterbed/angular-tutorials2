var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })

  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })
});


myApp.controller('mainController', ['$scope', '$location', '$log',
function($scope, $location, $log){
  $scope.people = [
    {
      name: 'John Doe',
      address: '555 Main St.',
      city: 'New York',
      state: 'NY',
      zip: '111111'
    },
    {
      name: 'Jane Doe',
      address: '333 Second St.',
      city: 'Buffalo',
      state: 'NY',
      zip: '22222'
    },
    {
      name: 'George Doe',
      address: '111 Third St.',
      city: 'Miami',
      state: 'FL',
      zip: '33333'
    }
  ]

  $scope.formattedAddress = function(person){
    return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip;
  }
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams',
function($scope, $log, $routeParams){

}]);

myApp.directive("searchResult", function(){
  return {
    restrict: 'AECM',
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      // personName: "@",
      // personAddress: "@"
      personObject: "=",
      formattedAddressFunction: "&"
    },
    transclude: true,
    link: function(scope, elements, attrs){
      console.log('Linking...');
      console.log(scope);
      if(scope.personObject.name == 'Jane Doe'){
        // elements.removeAttr('class');
      }
      console.log(elements);
    }
    // compile: function(elem, attrs){
    //   console.log('Compiling...');
    //   // elem.removeAttr('class');

    //   return {
    //     pre: function(scope, elements, attrs){
    //       console.log('Pre-linking...');
    //       console.log(elements);
    //     },

    //     post: function(scope, elements, attrs){
    //       console.log('Post-linking...');
    //       if(scope.personObject.name == 'Jane Doe'){
    //         // elements.removeAttr('class');
    //       }
    //     }
    //   }
    // }
  }
});