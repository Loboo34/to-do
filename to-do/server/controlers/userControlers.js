const User = require("../models/Usermodels");

//singin
const singinUser = async (req, res) => {
  res.json({mssg: 'singed in'})
}


//sing up

const singupUser = async (req, res) => {
res.json({mssg: 'singed up'})
  // const { name, email, password } = req.body;

  //  try {
  //   const user = await User.signupUser(name, email, password);

  //   //create token
  //   //const token = createToken(user._id);

  //   res.status(200).json({ name, email, user});
  // } catch (error) {
  //   res.status(400).json({ error: "user not created" });
  // }
};

module.exports = {singupUser, singinUser}