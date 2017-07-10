const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//app will not move past a use() unless next() is called to move forward with
//processing, async example
app.use((req, res, next) => {
	//human readable timestamp
	var now = new Date().toString();

	console.log(`${now}`);
	next();
});

// app.use((req, res, next) => {
// 	res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getFullYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
})

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home',
		welcomeMessage: 'Welcome!',
	});
});

app.get('/about', (req,res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
	});
});



app.listen(3000);
