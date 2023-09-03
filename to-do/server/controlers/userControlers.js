const User = require("../models/Usermodels");
const jwt = require('jsonwebtoken')
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "2d" });
};

//sing up
const singupUser = async (req, res) => {
  //res.json({mssg: 'singed up'})
  const { name, email, password } = req.body;

  try {
    const user = await User.singup(name, email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({ name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//singin
const singinUser = async (req, res) => {
  //res.json({ mssg: "singed in" });
  const {  email, password } = req.body;

  try {
    const user = await User.singin( email, password);
     const token = createToken(user._id);

    res.status(200).json({  email, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { singupUser, singinUser };
