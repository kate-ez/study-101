let express = require('express'); // node기반의 웹서버를 만드는 프레임워크
let morgan = require('morgan');
let exphbs = require('express-handlebars');
let app = express(); //서버

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(morgan('dev'));
app.use(express.static('public')); // middleware

/*
app.all('/*', (req, res, next) => {
	switch(req.method) {
		case 'GET':
 		switch (req.url) {
			case : /
 			res.send('hell');
		}
	}
}); 
*/

/*
app.get('/', (req, res, next) => {
	res.send('hello?');
}); // req, res는 객체 next는 함수

app.get('/login', (req, res, next) => {
	res.send('로그인해라');
});
*/

app.get('/', (req, res) => {
	res.render('index', {title: '스터디-101'});	
});

app.listen(2020);


//package.json은 menifest파일