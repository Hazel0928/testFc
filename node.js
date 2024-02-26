const http = require("http")

http.createServer((req, res) => {
    res.end("Hello World from node")
}).listen(8080);

