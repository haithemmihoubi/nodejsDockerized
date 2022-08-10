let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
// connect to the database
const  DB_USER = 'root';
const  DB_PASSWORD = 'example';
const  DB_HOST = 'mongo';
const  DB_PORT = '27017';
const  DB_NAME = 'test';
const  DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect((DB_URL).then(() => console.log('Connected to the database')).catch(err => console.log(err)));
let PORT = process.env.PORT || 3000;
let app= express();
app.get('/', function(req, res){
    res.send('<h1>Hello World this is production </h1>');
}
);
app.listen(PORT, function(){
    console.log("Server started on port " + PORT);
}
);