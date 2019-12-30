const http = require('http');

const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
	res.send('Add a product!');
});

app.use('/', (req, res, next) => {
	res.send('Youre home!');
});

app.listen(3000);
