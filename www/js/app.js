// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myapp = angular.module('starter', ['ionic']);
//var testapp = angular.module('starter', ['fCsv']);

myapp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


myapp.controller('myCtrl', ['$scope','$http',function($scope, $http){
  $scope.readCSV = function() {
    // http get request to read CSV file content
    $http.get('test1.csv').success($scope.processData);
  };

  $scope.processData = function(allText) {
   /* // split content based on new line
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split('\t');
    var lines = [];

    for ( var i = 0; i < allTextLines.length; i++) {
      // split content based on comma
      var data = allTextLines[i].split('\t');
      if (data.length == headers.length) {
        var tarr = [];
        for ( var j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        lines.push(tarr);
      }
    }
    $scope.data = JSON.stringify(lines); //JSON
    //$scope.data = lines; */

    var lines=allText.split(/\r\n|\n/);

  var result = [];

  var headers=lines[0].split("\t");

  for(var i=1;i<lines.length;i++){

    var obj = {};
    var currentline=lines[i].split("\t");

    for(var j=0;j<headers.length;j++){
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);

  }
  
  //return result; //JavaScript object
  $scope.data =  JSON.stringify(result); //JSON

  };

}]); 

  
