let express = require('express');
let path = require('path');
let PORT = process.env.PORT || 3000;
let app= express();
app.get('/', function(req, res){
    res.send('<h1>Hello World yes </h1>');
}
);
app.listen(PORT, function(){
    console.log("Server started on port " + PORT);
}
);