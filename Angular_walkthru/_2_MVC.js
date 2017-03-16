//Creating a MVC with angular. To do so,create a module name example
//in the public folder and create 2 subfolders named controllers and views inside that example folder
//Now create the example.client.module.js file and add following
angular.module('example',[]);

//Now include the example.client.module.js file to index.ejs file by followng.
<script type="text/javascript" src="/example/example.client.module.js"></script>

//Now include th example module in public/application.js
var mainApplicationModuleName = 'mean';
   var mainApplicationModule = angular.module(mainApplicationModuleName,
['example']); //Add the example here
   angular.element(document).ready(function() {
     angular.bootstrap(document, [mainApplicationModuleName]);
});
