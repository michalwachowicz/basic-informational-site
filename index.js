require("dotenv").config();

const http = require("http");

const server = http.createServer((req, res) => {});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
