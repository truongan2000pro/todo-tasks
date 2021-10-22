const express = require("express");
const cors = require("cors");
const tasks = require("./route/tasks");
const users = require("./route/users");
const connection = require("./db");
const app = express();
const port = 8080;

connection();
// function onRequest(req, res) {
//   res.write("hello");
//   res.end();
// }
app.use(express.json());
app.use(cors());
app.use("/api/tasks", tasks);
app.use("/api/users", users);
app.get("/", function (req, res) {
  res.json("Hello World!, I am server created by expresss");
});

app.listen(port, function (err) {
  if (err) {
    console.log("error", err);
  } else {
    console.log("server is listening on", port);
  }
});
