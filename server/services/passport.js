const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require("../config/dev");

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