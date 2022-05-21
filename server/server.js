const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

// enable cross origin
app.use(cors())

// connect to DB
require("./config/mongoose.config");

// setup express
app.use(express.json(), express.urlencoded({ extended: true }));

// import all my routes
const AllMyPirateRoutes = require("./routes/pirate.routes");
AllMyPirateRoutes(app);

// startup server
app.listen(port, () => console.log(`Listening on port: ${[port]}`));