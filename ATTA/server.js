var express = require('express');
var app = express();


app.get('/api/members', function(req, res) {

	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '1234',
	  database : 'ATTA'
	});

	connection.connect();

	connection.query('SELECT * FROM ATTA.MEMBERS', function(err, rows, fields) {
	  if (err) throw err;
		res.send(rows);

	  	console.log(rows);
	});
	connection.end();
});

app.use('/', express.static('./static'))

app.listen(3000);



