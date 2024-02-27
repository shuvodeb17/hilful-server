const app = require("./app");
const connectDB = require("./src/config/db");
const { PORT } = require("./src/secret");


app.listen( PORT , () => {
  console.log(`http://localhost:${PORT}`);
  connectDB();
});
