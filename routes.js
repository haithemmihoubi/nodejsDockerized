let express = require('express');
const path = require("path");
let router = express.Router();
router.get('/', function(req, res){
// res.render('<h1>Hello World</h1>');
    console.log("Hello World");
});
module.exports = router;
