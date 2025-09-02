import {} from 'schema';
import * as userService from './user.service.js';
import { createUserSchema, updateUserSchema, getUserSchema, deleteUserSchema } from './user.schema.js';

export async function getAllUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

export async function getUserById(req, res, next) {
  try {
    const data = getUserSchema.parse(req.params);
    const user = await userService.getUserById(data.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function createUser(req, res, next) {
  try {
    const data = createUserSchema.parse(req.body);
    const newUser = await userService.createUser(data);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
}

export async function updateUser(req, res, next) {
  try {
    const data = updateUserSchema.parse({ ...req.params, ...req.body });
    const updatedUser = await userService.updateUser(data.id, data);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
}

export async function deleteUser(req, res, next) {
  try {
    const data = deleteUserSchema.parse(req.params);
    const deleted = await userService.deleteUser(data.id);
    if (!deleted) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}