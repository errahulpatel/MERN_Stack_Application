const express = require("express");
const mongoose = require("mongoose");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

const keys = require("./config/dev");

mongoose.connect(keys.mongoURI);

const app = express();

authRoutes(app);
//require('./routes/authRoutes')(app);

app.get("/", (req, res) => {
  res.send({ Hi: "buddy" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
