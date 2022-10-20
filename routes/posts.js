const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/createPost", postsController.createPost);

// Update/edit post route
router.post("/updatePost/:id", postsController.updatePost);

router.put("/likePost/:id", postsController.likePost);

router.post("/markComplete/:id", postsController.markComplete)

router.post("/markIncomplete/:id", postsController.markIncomplete)

router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
