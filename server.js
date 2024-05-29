const express = require("express");
const routes = require("./routes/mensaje");
const {sequelize} = require("./models");
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/mensajes",routes);

app.listen(PORT, async () => {
console.log("the server is running in: " + PORT);
await sequelize.sync();
console.log("synced db");
});