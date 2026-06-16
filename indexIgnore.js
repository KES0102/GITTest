var http = require("http");

http
  .createServer(function (req, res) {
    //res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Penza");
  })
  .listen(9615, () => console.log("My Server Start"));
hkjhklkjlkjlkjlk;
