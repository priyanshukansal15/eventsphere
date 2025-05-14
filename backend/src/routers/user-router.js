// routers/user-router.js

import express from 'express';
import {
  getUser,
  updateUser,
  deleteUser,
  getAllUsers
} from '../controllers/user_controller.js';

const router = express.Router();

// User actions
router.get('/user/:userId', getUser);
router.put('/user/:userId', updateUser);
router.delete('/user/:userId', deleteUser);
router.get('/users', getAllUsers);

export default router;
