//Config express
let express = require('express');
var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
var app = express();  //initialize express

//Connect mongoDB
var mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/mongoose_test");
mongoose.connection.once("open", function(){
    console.log("Connected successfully")
})
mongoose.Promise = global.Promise;

//Use middleware
app.use(urlencodeParser);
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

//initialize app
let initApp = require('./api/app');
initApp(app);

//Listen to the port
app.listen(3000);

console.log('Listening to port: 3000');