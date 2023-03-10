const http = require("http");
const app = require("./app.js");
const server = http.createServer(app);
const models = require("./models");

models.sync().then(() => {
  const port = process.env.PORT || 3000;
  server.listen(port, () =>
    console.log("Server is running at http://localhost:" + port)
  );
});