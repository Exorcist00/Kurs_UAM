var express = require('express');
var faker = require('faker');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('./'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse text
app.use(bodyParser.text());

// parse application/json
app.use(bodyParser.json());

var records = [];

app.get('/api/todos', function (req, res) {
	setTimeout(function () {
		res.json(records);
	}, 500);
});

app.post('/api/todos', function (req, res) {
	var data;
	try {
		data = JSON.parse(req.body);
		if (!req.body || !Array.isArray(data)) {
			throw new Error('Wrong data format!');
		}
		if (!data.length) {
			throw new Error('Passed array is empty');
		}
		for (var i = 0; i < data.length; i++) {
			records.push({
				id: data[i].id,
				value: data[i].value
			});
		};
		res.json({
			status: true,
			msg: 'Saved ' + data.length + ' elements'
		});
	} catch (e) {
		res.json({
			status: false,
			msg: e.message
		});
	}

});


var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
