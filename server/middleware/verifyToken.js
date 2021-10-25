const jwt = require("jsonwebtoken");
require("dotenv").config(0);

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjE3MTY0YWE2ZThjN2M5MTExYjBlOWJhIiwiaWF0IjoxNjM0ODY5MzYxfQ.lpUqVWw3IkeNwe9Hu1c9LkQF7NDCtdoTa0rUJ3nbv9U";
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
