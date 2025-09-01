// src/modules/auth/auth.controller.js
import * as authService from './auth.service.js';
import { loginSchema, signupSchema } from './auth.schema.js';

export async function signup(req, res, next) {
  try {
    const data = signupSchema.parse(req.body);
    const token = await authService.signup(data);
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
}

export async function login(req, res, next) {
  try {
    const data = loginSchema.parse(req.body);
    const token = await authService.login(data);
    res.json({ token });
  } catch (err) {
    next(err);
  }
}

// src/modules/auth/auth.controller.js
export async function logout(req, res, next) {
  try {
    // Example: clear token on client side or just respond
    res.json({ message: 'Logged out successfully' });
  } catch (err) {
    next(err);
  }
}
