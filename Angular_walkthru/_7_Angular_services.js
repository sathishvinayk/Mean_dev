//$using http service from angular provides the information from server
//Change the index.server.controller.js file as follows:
exports.render = function(req, res) {
     res.render('index', {
       title: 'Hello World',
       //Create a user object to get the current logged in user
       user: JSON.stringify(req.user)
     });
};

//Next change the index.ejs to the below
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

     <script type="text/javascript" src="/lib/angular/angular.js"></script>
     <script type="text/javascript" src="/lib/angular-route/angular-route.js"></script>
     <script type="text/javascript" src="/example/example.client.module.js"></script>
     <script type="text/javascript" src="/example/controllers/example.client.controller.js"></script>
     <script type="text/javascript" src="/example/config/example.client.routes.js"></script>
     <script type="text/javascript" src="/application.js"></script>
   </body>
</html>
