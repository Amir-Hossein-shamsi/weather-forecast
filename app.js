const express = require('express'),
    path=require('path');
    
var mainrouters =require("./routers/mainrouters");
var app=express();


const publicDirectionPath=path.join(__dirname ,'./views/public');

app.set('view engine','hbs');
app.use(express.static(publicDirectionPath));
app.use(mainrouters);




var port=3000;
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});