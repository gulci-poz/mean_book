//ubezpieczamy się na wypadek, gdyby zmienna nie była wcześniej ustawiona
//zaleca się, żeby zmienna NODE_ENV była ustawiona w systemie przed uruchomieniem aplikacji
//export NODE_ENV=development
//echo $NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');

var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');
