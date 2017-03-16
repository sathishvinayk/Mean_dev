//Add a authentication service
//Create a folder called users inside public and a subfolder named services
//now creata file called users.client.module.js inside public/users/services folder and add following
angular.module('users', []);

//create a file called authentication.client.service.js inside public/users/services folder and add following
angular.module('users').factory('Authentication', [
     function() {
       this.user = window.user;
       return {
         user: this.user
       };
     }
]);

//now change index.ejs file to the following
<!DOCTYPE html>
   <html xmlns:ng="http://angularjs.org">
   <head>
     <title><%= title %></title>
   </head>
   <body>
      <% if (user) { %>
             <a href="/signout">Sign out</a>
           <% } else { %>
             <a href="/signup">Signup</a>
             <a href="/signin">Signin</a>
      <% } %>
       <section ng-view></section>
       <script type="text/javascript">
         window.user = <%- user || 'null' %>;
       </script>
     <script type="text/javascript" src="/lib/angular/angular.js"><script>
     <script type="text/javascript" src="/lib/angular-route/angular-route.js"></script>
     <script type="text/javascript" src="/example/example.client.module.js"></script>
     <script type="text/javascript" src="/example/controllers/example.client.controller.js"></script>
     <script type="text/javascript" src="/example/config/example.client.routes.js"></script>
     <script type="text/javascript" src="/users/users.client.module.js"></script>
     <script type="text/javascript" src="/users/services/authentication.client.service.js"></script>
     <script type="text/javascript" src="/application.js"></script>
   </body>
</html>


//NOw include the users as dependency in application.js in public/application.js
var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName,
     ['ngRoute', 'users', 'example']);

mainApplicationModule.config(['$locationProvider',
     function($locationProvider) {
       $locationProvider.hashPrefix('!');
     }
]);

if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function() {
  angular.bootstrap(document, [mainApplicationModuleName]);
});
