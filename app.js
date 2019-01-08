const http = require('http');

http.createServer((req, res) => {

    res.writeHead()
    res.write('HolaMundo');
    res.end();

}).listen(8080);

console.log('escuchando');