import createError from 'http-errors';
import { cloudinary } from '../utils/cloudinary.js';
import { getUserById, updateUser } from '../services/usersService.js';

export const getCurrentUser = async (req, res) => {
  const user = await getUserById(req.user._id);
  if (!user) throw createError(404, 'User not found');
  res.status(200).json(user);
};

export const updateAvatar = async (req, res) => {
  if (!req.file) throw createError(400, 'No file provided');

  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: 'avatars' }, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      })
      .end(req.file.buffer);
  });

  const user = await updateUser(req.user._id, { avatar: result.secure_url });
  res.status(200).json(user);
};

export const updateUserData = async (req, res) => {
  const user = await updateUser(req.user._id, req.body);
  if (!user) throw createError(404, 'User not found');
  res.status(200).json(user);
};
