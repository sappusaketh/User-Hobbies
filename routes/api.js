const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User');

// @route   POST user/adduser
// @desc    Add a user
// @access  public

router.post(
  '/adduser',

  [
    check('username', 'username is required')
      .not()
      .isEmpty(),
    check('hobbies', 'hobbies is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const username = req.body.username.trim();
    const hobbies = req.body.hobbies.split(',').map(hobbie => hobbie.trim());
    let avatar = `https://api.adorable.io/avatars/285/${username}@adorable.io.png`;

    try {
      let user = await User.findOne({ username: username.trim() });
      //   check if user exists
      if (user) {
        return res.status(400).json({ username: 'User already exists' });
      }
      //   check if user uploads image
      if (req.files) {
        let image = req.files.avatar;
        if (
          !(image.mimetype === 'image/jpeg' || image.mimetype === 'image/png')
        ) {
          return res.status(415).json({ avatar: 'invalid image type' });
        }
        if (image.truncated) {
          return res
            .status(413)
            .json({ avatar: 'File size limit has been reached' });
        }

        const date = Date.now();
        avatar = date + username + '-' + image.name;
        await image.mv('uploads/' + avatar);
        avatar = `http://localhost:5000/images/${avatar}`;
      }
      user = new User({
        username,
        hobbies,
        avatar
      });
      await user.save();
      return res.status(200).send('User Saved');
    } catch (error) {
      console.log(error);
      return res.status(500).send('Internal Server Error');
    }
  }
);

// @route   GET user/allusers
// @desc    get all users in DB
// @access  public

router.get('/allusers', async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
});
module.exports = router;
