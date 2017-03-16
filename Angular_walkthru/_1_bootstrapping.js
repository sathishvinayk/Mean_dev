//Create a application.js inside public folder.
var mainApplicationModuleName = 'mean';
   var mainApplicationModule = angular.module(mainApplicationModuleName
   , []);
   angular.element(document).ready(function() {
     angular.bootstrap(document, [mainApplicationModuleName]);
});

//Include the following on app/views/index.ejs
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
     //This block is angular.
     <section>
       <input type="text" id="text1" ng-model="name">
       <input type="text" id="text2" ng-model="name">
     </section>
     <script type="text/javascript" src="/lib/angular/angular.js"></script>
     <script type="text/javascript" src="/application.js"></script>
     </body>
</html>
