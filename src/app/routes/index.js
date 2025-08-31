import {Router} from 'express'
import bcrypt from 'bcryptjs'

const router = Router()

router.use('/auth', authRouter)

export default router