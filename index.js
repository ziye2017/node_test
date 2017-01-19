var express = require('express');
var app = express();

app.listen(3000);

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//静态文件中间件 必须放这里
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
	
	res.render('home');
});

var fortunes = [
	'aaaa','bbbbb','ccccc','ddddd'
	
];


app.get('/headers', function(req, res){
	
	res.set('Content-Type', 'text/plain');
	var s = '';
	for (var name in req.headers)
	{
		s += name + ": " + req.headers[name] + '\n';
	}
	
	// 下面的无用，可见 res.send 才带上返回的HTTP 头
	s += "\n"

	for (var m in res.headers)
	{
		s += m + ": " + res.headers[m] + '\n';
	}

	res.send(s);

});


app.get('/about', function(req, res, next){
	
	var random = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', {fortune:random});
	
});


app.use(function(req, res){
	res.status(404);
	res.render('404');

});

app.use(function(err, req, res,next)
{
	res.status(500);
	res.render('500');
});

