var express=require('express'),
    app=express();

var Name1=function(req,res,next){
  if(req.param('name')){
    next();
  }else {
    res.send('Mention a name');
  }
};
var Greeting=function(req,res,next){
  res.send('Hello '+ req.param('name'));
};

app.get('/',Name1, Greeting);
app.listen(3000,function(){
  console.log('Running on 3000');
});
