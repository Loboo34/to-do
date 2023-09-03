const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
    unique: true,
  },
});

//sing up static method
userSchema.statics.singup = async function (name, email, password) {
  const emailExists = await this.findOne({ email });
  const nameExists = await this.findOne({ name });

  if (emailExists) {
    throw Error("email already exists");
  }

  if (nameExists) {
    throw Error("Name already in use");
  }

  const salt = await bcrypt.genSalt(5)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ name, email, password: hash});

  return user;
};

//singin 
userSchema.statics.singin = async function ( email, password) {
    if(!email || !password) {
        throw Error('All fields must be filled')
    }
const user = await this.findOne({ email})

    if(!user) {
        throw Error('Incorrect Email')
    }
     const match = await bcrypt.compare(password, user.password);
     if (!match) {
       throw Error("Invalid Password");
     }

    return user
}

module.exports = mongoose.model("User", userSchema);
