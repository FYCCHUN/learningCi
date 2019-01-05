var express = require('express');

var app = express();

app.get('/',function(req, res){
	res.send('hello world')
})

var server = app.listen(8082,function(){
	var port = server.address().port;
	console.log('server is listen at prot: ' + port);
})