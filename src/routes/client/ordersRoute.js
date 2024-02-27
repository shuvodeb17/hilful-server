const express = require("express");
const {
  ordersPost,
  ordersGet,
} = require("../../controllers/client/ordersController");
const ordersRoute = express.Router();

ordersRoute.post("/orders-post", ordersPost);
ordersRoute.get("/orders-get", ordersGet);

module.exports = ordersRoute;
