require("dotenv").config();

const http = require("http");
const path = require("path");
const fs = require("fs/promises");

const server = http.createServer(async (req, res) => {
  const filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  const ext = path.extname(filePath);

  let contentType = "text/html";

  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
  }

  try {
    const data = await fs.readFile(filePath);

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      const data = await fs.readFile(
        path.join(__dirname, "public", "404.html")
      );

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    } else {
      console.error(err);
      res.writeHead(500);
      res.end(`Server error: ${err.code}`);
    }
  }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
