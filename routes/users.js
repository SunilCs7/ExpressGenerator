// step-1: install mangodb
// step-2: install mangoose->inp i mangoose

// step-3:Require and setup connection
const mongoose = require("mongoose"); //require mongoose

mongoose.connect("mongodb://127.0.0.1:27017/Practicekarojaaneman"); // setup database in database with base prace..

// step-4: make schema
const userSchema = mongoose.Schema({
  //create a new instance of the Schema object of user
  username: String,
  name: String,
  email: String,
  age: Number,
});

// step-5:create model and export

mangoose.model("user", userSchema);
