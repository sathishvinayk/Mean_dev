//Add the controller to the app by the below snippert.
//Create a new file called example.client.controller.js in public/example/controllers and add below
angular.module('example').controller('ExampleController', ['$scope',
     function($scope) {
       $scope.name = 'MEAN Application';
     }
]);


//Now add this to the index.ejs by the below snippet
<!DOCTYPE html>
   <html xmlns:ng="http://angularjs.org">
   <head>
     <title><%= title %></title>
   </head>
   <body>
     <% if (userFullName) { %>
       <h2>Hello <%=userFullName%> </h2>
       <a href="/signout">Sign out</a>
     <% } else { %>
       <a href="/signup">Signup</a>
       <a href="/signin">Signin</a>
     <% } %>
     <section ng-include="'example/views/example.client.view.html'"></
   section>
     <script type="text/javascript" src="/lib/angular/angular.js"></
   script>
     <script type="text/javascript" src="/example/example.client.module.js"></script>
     <script type="text/javascript" src="/example/controllers/example.client.controller.js"></script>
     <script type="text/javascript" src="/application.js"></script>
   </body>
</html>


//After this change the view file in public/example/views/example.client.view.html
<section ng-controller=ExampleController>
     <input type=text id=text1 ng-model=name>
     <input type=text id=text2 ng-model=name>
</section>

//Run the server
node server
