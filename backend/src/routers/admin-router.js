// routers/admin-router.js

import express from 'express';
import {
  postEvent,
  deleteEvent,
  editEvent,
  addUser,
  deleteUser
} from '../controllers/admin_controller.js';

const router = express.Router();

// Admin actions
router.post('/event', postEvent);
router.delete('/event/:eventId', deleteEvent);
router.put('/event/:eventId', editEvent);
router.post('/add-user', addUser);
router.delete('/delete-user/:userId', deleteUser);

export default router;
