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
    isAdmin: function (req, res, next) {
      if (req.isAuthenticated() && (req.user.id == "63530f41a43c911343190bd9")) {
            return next();
      } else {
        res.redirect("/profile");
      }
    }
  }