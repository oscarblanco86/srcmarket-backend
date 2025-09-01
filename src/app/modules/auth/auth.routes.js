// modules/auth/auth.routes.js
import { Router } from 'express';
import * as authController from './auth.controller.js';
import requireAuth from '#middleware/auth.middleware.js';

const router = Router();

console.log('requireAuth:', requireAuth);
console.log('authController.logout:', authController.logout);

router.post('/logout', requireAuth, authController.logout);



export default router;
