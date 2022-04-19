'use strict';

const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');

const registerUser = asyncHandler(async (request, response) => {
  const { name, email, password, avatar, likedVideos, comments } = request.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    response.status(400);
    throw new Error('User already exists');
  }
  const user = await User.create({
    name,
    email,
    password,
    avatar,
    likedVideos,
    comments,
  });
  if (user) {
    response.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      avatar: user.avatar,
      likedVideos: user.likedVideos,
      comments: user.comments,
      token: generateToken(user._id),
    });
  } else {
    response.status(400);
    throw new Error('Error occurred creating user');
  }
});

const authorizeUser = asyncHandler(async (request, response) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email });

  if (user && (await user.validatePassword(password))) {
    response.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      avatar: user.avatar,
      likedVideos: user.likedVideos,
      comments: user.comments,
      token: generateToken(user._id),
    });
  } else if (!user) {
    response.status(400);
    throw new Error('User does not exist');
  } else {
    response.status(400);
    throw new Error('Invalid email or password');
  }
});

module.exports = { registerUser, authorizeUser };
