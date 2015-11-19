//routing za pomocą funkcji middleware z kontrolera
//app to instancja aplikacji express, która została tutaj przekazana
module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render)
}
