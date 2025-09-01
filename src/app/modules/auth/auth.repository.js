// src/modules/auth/auth.repository.js
import prisma from '#prisma/client.js';

export function findUserByUsername(username) {
  return prisma.user.findUnique({ where: { username } });
}

export function findUserByEmail(email) {
  return prisma.user.findUnique({ where: { email } });
}

export function createUser(data) {
  return prisma.user.create({ data });
}
