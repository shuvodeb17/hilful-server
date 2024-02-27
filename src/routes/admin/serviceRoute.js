const express = require("express");
const { addService, getServices } = require("../../controllers/admin/serviceController");
const serviceRoute = express.Router();

serviceRoute.post("/service-post", addService);
serviceRoute.get("/get-service", getServices);

module.exports = serviceRoute;
