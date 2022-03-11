const express = require("express");
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require("./config/dev");
const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClinetID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refereshToken, profile, done) => {
      console.log("access Token : ", accessToken);
      console.log("referesh Token :", refereshToken);
      console.log("profile :", profile);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/callback", passport.authenticate("google"), async (req, res) => {
  console.log(JSON.stringify(req.user));
  
});

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
