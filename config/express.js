//tutaj konfigurujemy aplikację express, tutaj dodajemy wszystko związane z konfiguracją express

var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function() {
    var app = express();

    //property process.env - zmienna globalna, umożliwia dostęp do zmiennych środowiskowych
    //NODE_ENV - zmienna środowiskowa, konfiguracja środowiska

    //jeśli jesteśmy w trybie debug, to używamy loggera
    //jeśli jesteśmy w trybie produkcyjnym, to kompresujemy response body
    if(process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if(process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    //te middleware zawsze się załadują, bez względu na środowisko
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    //kofiguracja widoku aplikacji
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);

    //zwraxamy instancję aplikacji
    return app;
};
