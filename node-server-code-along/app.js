const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head>Enter Message</head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message">Enter stuff</input><button type="submit">Click here</button></form></body>')
    res.write('</html >')
    return res.end()
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'dummy')
    res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head>Hi there</head>')
  res.write('</html >')
  res.end()

})

server.listen(3000)
