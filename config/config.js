//ładowanie plików konfiguracyjnych
//załadowanie danej konfiguracji zależy od wartości zmiennej NODE_ENV
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
