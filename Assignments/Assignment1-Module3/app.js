const http = require('http');

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write('<html>');
		res.write('<head><Title>Assignment 1</Title></head>');
		res.write(
			'<body><h1>Can you see it? This is the / page.</h1><form action="/create-user" method="POST" ><input name="create type="text>Enter user</input></form></body>'
		);
		res.write('</html>');

		return res.end();
	}

	if (url === '/create-user') {
		const body = [];
		req.on('data', chunk => {
			body.push(chunk);
		});
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=');
			console.log(message[1]);
		});
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	}

	if (url === '/users') {
		res.write('<html>');
		res.write('<head><Title>Assignment 1</Title></head>');
		res.write(
			'<body><h1>Can you see it? This is the users page.</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>'
		);
		res.write('</html>');

		return res.end();
	}

	res.write('<html>');
	res.write('<head><Title>Assignment 1</Title></head>');
	res.write('<body><h1>Can you see it? This is the default page.</h1></body>');
	res.write('</html>');

	res.end();
});

server.listen(3000);
