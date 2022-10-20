const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  // title: {
  //   type: String,
  //   required: true,
  // },
  // image: {
  //   type: String,
  //   require: true,
  // },
  // cloudinaryId: {
  //   type: String,
  //   require: true,
  // },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  createdBy:{
    type: String
  },
  createdByEmail:{
    type: String
  },
  createdByNumber:{
    type: String
  }

});

module.exports = mongoose.model("Post", PostSchema);


