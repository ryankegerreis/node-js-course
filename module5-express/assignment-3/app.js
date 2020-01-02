const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'Views', 'Users.html'));
});

app.use('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'Views', 'Home.html'));
});

app.listen(3000);
