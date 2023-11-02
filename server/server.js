const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.get(PORT, (_, response) => response.json("Root route for translatim."));

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
