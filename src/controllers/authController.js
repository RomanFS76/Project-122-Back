import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import { Session } from '../models/session';
import { createSession, setSessionCookies } from '../services/auth';

export const registerUser = async (req, res, next) => {
  const { email, password, username } = req.body;
  const isExistingUser = await User.findOne({ email });
  if (isExistingUser) {
    throw createHttpError(400, 'Email in use');
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({
      username,
      password: hashedPassword,
      email,
    });
    const session = await createSession(user._id);
    setSessionCookies(res, session);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
