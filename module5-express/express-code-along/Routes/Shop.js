const path = require('path');

const express = require('express');

const rootDir = require('../Utils/path')

const Router = express.Router();

Router.get('/', (req, res, next) => {
	console.log('Home');
	res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = Router;
