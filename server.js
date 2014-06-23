var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send("hola, mundo!!");
});

require('./routes')(app);
mongoose.connect('mongodb://localhost/seriestv', function(err, res){
    if(err) console.log("ERROR: Conectando a la BD: "+err);
    else console.log("Conexion a la BD realizada");
});
app.listen(5000);

console.log('Servidor Express escuchando en el puerto');