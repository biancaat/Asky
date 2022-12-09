module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      } else {
        res.redirect("/");
      }
    },
    ensureGuest: function (req, res, next) {
      if (!req.isAuthenticated()) {
        return next();
      } else {
        res.redirect("/dashboard");
      }
    },
    // This check the user if against a hard coded admin, if admin then certain features available 
    isAdmin: function (req, res, next) {
      if (req.isAuthenticated() && (req.user.id == "63530f41a43c911343190bd9")) {
            return next();
            // if not admin then redirect user to their profile
      } else {
        res.redirect("/profile");
      }
    }
  }