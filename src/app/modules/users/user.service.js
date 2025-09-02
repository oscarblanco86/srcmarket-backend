
export async function getAllUsers() {
  const users = await userRepository.findAllUsers()
    return users
}

export async function getUserById(id) {
  const user = await userRepository.findUserById(id)
  return user
}

export async function createUser({ username, email, password }) {
  const existingUser = await userRepository.findUserByEmail(email)
  if (existingUser) throw new Error('Email already in use')

  const newUser = await userRepository.createUser({ username, email, password })
  return newUser
}

export async function updateUser(id, { username, email, password }) {
  const user = await userRepository.findUserById(id)
  if (!user) return null

  const updatedUser = await userRepository.updateUser(id, { username, email, password })
  return updatedUser
}

export async function deleteUser(id) {
  const user = await userRepository.findUserById(id)
  if (!user) return false

  await userRepository.deleteUser(id)
  return true
}

import * as userRepository from './user.repository.js'