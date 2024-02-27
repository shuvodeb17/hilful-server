const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./src/routers/routers");
const app = express();

app.use(cors());
app.use(bodyParser.json());

// application route 
app.use('/api/v1', router)

app.get("/", (req, res) => {
  res.send("Hilful IT server");
});



module.exports = app;