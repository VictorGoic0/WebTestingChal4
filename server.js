const express = require("express");
const helmet = require("helmet");
const router = require("./router/router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/posts", router);

module.exports = server;
