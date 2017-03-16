//Change the Authentication service inside public/example/controllers/example.client.controller.js
angular.module('example').controller('ExampleController', ['$scope', 'Authentication',
  function($scope, Authentication) {
    $scope.name = Authentication.user ? Authentication.user.fullName :
    'MEAN Application';
  }
]);

//Now start the server
node server
