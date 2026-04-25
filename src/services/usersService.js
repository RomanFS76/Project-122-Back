import { User } from '../models/user.js';

export const getUserById = (id) => User.findById(id).select('-password');

export const updateUser = (id, data) =>
  User.findByIdAndUpdate(id, data, { new: true }).select('-password');
