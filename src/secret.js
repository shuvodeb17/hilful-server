const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
const CLOUD_NAME = process.env.CLOUD_NAME;
const API_SECRET = process.env.API_SECRET;
const API_KEY = process.env.API_KEY;

module.exports = {PORT, DB_URL, CLOUD_NAME, API_SECRET, API_KEY};