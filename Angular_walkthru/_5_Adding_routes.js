//Adding installing ng-route change the index.ejs to the following
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
     <script type="text/javascript" src="/lib/angular-route/angular-route.js"></script>
     <script type="text/javascript" src="/example/example.client.module.js"></script>
     <script type="text/javascript" src="/example/controllers/example.client.controller.js"></script>
     <script type="text/javascript" src="/application.js"></script>
   </body>
</html>

//add the ngRoute as dependency in your main app file in public.application.js
var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'example']);
   angular.element(document).ready(function() {
     angular.bootstrap(document, [mainApplicationModuleName]);
});