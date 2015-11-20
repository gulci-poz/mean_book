//funkcje middleware umieszczamy w kontrolerze

//używamy szablonu ejs o nazwie index (index.ejs) i przekazujemy obiekt zawierający zmienne szablonu
//ejs będzie szukał szablonu w folderze views
//w aplikacjach MEAN większość renderowania HTML ma miejsce w angularJs
exports.render = function(req, res) {
    res.render('index', {
        title: 'Hello World'
    });
};
