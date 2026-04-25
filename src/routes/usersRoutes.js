import { Router } from 'express';
import multer from 'multer';
import { authenticate } from '../middleware/authenticate.js';
import {
  getCurrentUser,
  updateAvatar,
  updateUserData,
} from '../controllers/usersController.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.get('/users/me', authenticate, getCurrentUser);
router.patch('/users/me/avatar', authenticate, upload.single('avatar'), updateAvatar);
router.patch('/users/me', authenticate, updateUserData);

export default router;
