import http from "http";

const server = http.createServer(
  (request: http.IncomingMessage, response: http.ServerResponse) => {
    const { url } = request;

    if (url === "/") {
      response.writeHead(200, { "content-type": "text/html" });
      response.end("<h1>Home</h1>");
      return;
    }

    if (url === "/about") {
      response.writeHead(200, { "content-type": "text/html" });
      response.end("<h1>About</h1>");
      return;
    }

    if (url === "/my-account") {
      response.writeHead(403, { "content-type": "text/plain" });
      response.end("You have no access to this page");
      return;
    }

    // Any other url
    response.writeHead(404, { "content-type": "text/plain" });
    response.end("Page not found");
  },
);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
