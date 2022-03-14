//keys.js - figure out what set of Credentials to return
if (process.env.NODE_ENV === "production") {
  // We are in Production
  module.exports = require("./prod");
} else {
  //we ar ein Development
  module.exports = require("./dev");
}
