//Create a file named example.client.view.html inside public/example/views
//And paste the following
<section>
     <input type=text id=text1 ng-model=name>
     <input type=text id=text2 ng-model=name>
</section>

//Now include this file in index.ejs and then add ng-include
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
     //The Below statement is including the view from public/example/views/example.client.view.html
     <section ng-include="'example/views/example.client.view.html'"></
   section>
     <script type="text/javascript" src="/lib/angular/angular.js"></
   script>
     <script type="text/javascript" src="/example/example.client.module.js"></script>
     <script type="text/javascript" src="/application.js"></script>
   </body>
</html>

//Then Run node
node server
