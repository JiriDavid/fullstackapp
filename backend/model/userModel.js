const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "fullname is required"],
  },

email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    lowercase: true
  },


  password: {
    type: String,
    required: [true, "password in required"],
    minLength: [6,"password should be greater than 6 charactors"],
    select: false
  },


  photo: {
    type: String,
    default: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png"
  },


  storename: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
    lowercase: true
  },

  introduction: String,

  numProducts: {
    type: Number,
    default: 0,
  },
  
  bannerImage: {
    type: String,
    default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.spencer-ogden.com%2Fevents%2Farchive%2F2021%2F07&psig=AOvVaw0979hMm_1MPmBF0dlaHeRU&ust=1715753147524000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDy8dq8jIYDFQAAAAAdAAAAABAE"
  },

  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },

  
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpire: Date,

  active: {
    type: Boolean,
    default: true,
  },
},
  {
    timestamps: true
  }
  
);

userSchema.pre("save", async function(next){
  //check if the password has not been modified
  if(!this.isModified("password")) return next()

    //hashing of password
    const hashedPassword = await bcrypt.hash(this.password, 12)
    this.password = hashedPassword
    next()
})
//instance method to hash password
userSchema.methods.comparePassword = async function(userPassword, dbPassword){
  return await bcrypt.compare(userPassword, dbPassword)
}

const User = mongoose.model("User", userSchema)

module.exports = User