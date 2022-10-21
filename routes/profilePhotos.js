const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const profilePhotosController = require("../controllers/profilePhotos");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now

router.post("/addProfilePhoto", upload.single("file"), profilePhotosController.addProfilePhoto);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;