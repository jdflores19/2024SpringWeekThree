const http = require("http");

serveText("Hello world");

function serveText(text) {
  const server = http.createServer(function (req, res) {
    console.log("text was served");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(text);
    res.write(", eat more lunch");
    res.end();
  });

  server.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

// const server = http.createServer((req, res) => {
//   res.end("Hello Week Three");
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
