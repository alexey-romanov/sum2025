const http = require("http");
const fs = require("fs").promises;

// const requestListener = (req, res) => {
//   res.writeHead(200);
//   res.end("Hello world! From server!");
// };

// const requestListener = (req, res) => {
//   res.setHeader("Content-Type", "text/html")
//   res.writeHead(200);
//   res.end(`<html><body><h1>HTML server from server</h1></body></html>`);
// };

const requestListener = (req, res) => {
  console.log(req.headers.cookie);
  if (req.url === "/") {
    fs.readFile("index.html", "utf8").then((contents) => {
      const dateString = new Date().toTimeString();
      const contentsWithTime = contents.replace("*TIME*", dateString);
      res.setHeader("Content-Type", "text/html");
      res.setHeader("Set-Cookie", 'myCookie=hello; HttpOnly')
      res.writeHead(200);
      res.end(contentsWithTime);
    });
  } else {
    fs.readFile(__dirname + req.url, "utf8").then((contents) => {
      res.setHeader("Content-Type", "text/javascript");
      res.writeHead(200);
      res.end(contents);
    }).catch((err)=>{
        res.writeHead(404);
        res.end();
    });
  }
};

// const requestListener = async (req, res) => {
//   const contents = await fs.readFile("index.html", "utf8");
//   res.setHeader("Content-Type", "text/html");
//   res.writeHead(200);
//   res.end(contents);
// };

const server = http.createServer(requestListener);
const host = "localhost";
const port = 8001;

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
