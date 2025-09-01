// routes/index.js
import { Router } from 'express'
import authRoutes from '#modules/auth/auth.routes.js';
// import postsRoutes from '#modules/posts/posts.routes.js';
// import usersRoutes from '#modules/users/users.routes.js';

const router = Router();

router.use('/auth', authRoutes);
// router.use('/posts', postsRoutes);
// router.use('/users', usersRoutes);

export default router;
