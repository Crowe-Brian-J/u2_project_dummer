const mongoose = require('mongoose')
//optional shortcut to mongoose.Schema class
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
