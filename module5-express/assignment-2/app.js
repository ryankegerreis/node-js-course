const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
	console.log('this always runs');
	next();
});

app.use('/users', (req, res, next) => {
	console.log('reached users page');
	res.send('<h1>Users Page</h1>');
});

app.use('/', (req, res, next) => {
	console.log('This one runs sometimes too.');
	res.send('<h1>Home Page</h1>');
});

app.listen(3000);
