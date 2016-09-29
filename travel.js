var express = require('express');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 1337);

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/about', function (req, res) {
  res.render('about');
});

// view engine setup
app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ОШИБКА 404
app.use(function (req, res) {
  res.status('404');
  res.send('404 - не найдено');
});

// Ошибка 500
app.use(function (req, res) {
  res.status('500');
  console.error(err.stack);
  res.send('500 - ошибка сервера');
});

app.listen(app.get('port'), function () {
  console.log('Сервер запущен на порте' + app.get('port') + " - нажмите CTRL+C для завершения");
});
