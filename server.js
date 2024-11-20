const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile("server.html", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("Error reading HTML File.");
      return;
    }
    res.end("<h1> Hello Node!!!!</h1>\n");
  });
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
