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
      if (req.isAuthenticated() && (req.user.id == "633751ff359fb504993b829f")) {
            return next();
      } else {
        res.redirect("/profile");
      }
    }
  }