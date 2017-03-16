// # stands for the client routing. To utilize this we can use Hashbangs.Hashbangs
//Change the public/application.js file to below
var mainApplicationModuleName = 'mean';
   var mainApplicationModule = angular.module(mainApplicationModuleName,
   ['ngRoute', 'example']);

   mainApplicationModule.config(['$locationProvider',
     function($locationProvider) {
       $locationProvider.hashPrefix('!');
     }
]);
   angular.element(document).ready(function() {
     angular.bootstrap(document, [mainApplicationModuleName]);
});

//Using a $routeProvider object, define the routes.
//Create a new folder as config in public/example
//Now create the example.client/routes.js in pubic/example/config
angular.module('example').config(['$routeProvider',
     function($routeProvider) {
       $routeProvider.
       when('/', {
         templateUrl: 'example/views/example.client.view.html'
       }).
       otherwise({
         redirectTo: '/'
       });
     }
]);

//after this, change the index.ejs to the following
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
     <section ng-view></section>
     <script type="text/javascript" src="/lib/angular/angular.js"></
   script>
     <script type="text/javascript" src="/lib/angular-route/angular-route.js"></script>
     <script type="text/javascript" src="/example/example.client.module.js"></script>
     <script type="text/javascript" src="/example/controllers/example.client.controller.js"></script>
     <script type="text/javascript" src="/example/config/example.client.routes.js"></script>
     <script type="text/javascript" src="/application.js"></script>
   </body>
</html>

//Run the server and check the url of the app which shows as http://localhost:3000/#!/.
node server
