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

