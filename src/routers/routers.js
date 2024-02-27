const express = require("express");
const serviceRoute = require("../routes/admin/serviceRoute");
const ordersRoute = require("../routes/client/ordersRoute");
const router = express.Router();

const allRoutes = [
  {
    path: "/client",
    element: ordersRoute,
  },
  {
    path: "/admin",
    element: serviceRoute,
  },
];

allRoutes.map((route) => router.use(route.path, route.element));

module.exports = router;
