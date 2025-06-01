import express from 'express';
import { getUsers } from '../controllers/UserController.js';

const router = express.Router();

router.get('/users/:id', getUsers);

export default router;