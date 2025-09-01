// src/modules/auth/auth.service.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as authRepo from './auth.repository.js';

export async function signup({ username, email, password }) {
  const existingUser = await authRepo.findUserByEmail(email);
  if (existingUser) throw new Error('Email already in use');

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await authRepo.createUser({
    username,
    email,
    password: hashedPassword,
  });

  return generateToken(user.id);
}

export async function login({ username, password }) {
  const user = await authRepo.findUserByUsername(username);
  if (!user) throw new Error('Invalid credentials');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid credentials');

  return generateToken(user.id);
}

function generateToken(userId) {
  return jwt.sign({ sub: userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
}
