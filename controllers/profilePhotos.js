const cloudinary = require("../middleware/cloudinary");
const ProfilePhoto = require("../models/ProfilePhoto");


module.exports = {
    addProfilePhoto: async (req, res) => {
        try {
          // Upload image to cloudinary
          const result = await cloudinary.uploader.upload(req.file.path);
    
          await ProfilePhoto.create({
            image: result.secure_url,
            cloudinaryId: result.public_id,
            user: req.user.id,
          });
          console.log("Profile photo has been added!");
          res.redirect("/profile");
        } catch (err) {
          console.log(err);
        }
      },


};