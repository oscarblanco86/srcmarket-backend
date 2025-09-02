import { Router } from "express";
import * as userController from "./user.controller.js";
import requireAuth from "#middleware/auth.middleware.js";
import validate from "#middleware/validate.middleware.js";
import { createUserSchema, updateUserSchema, getUserSchema, deleteUserSchema } from "./user.schema.js";

const router = Router();

router.get("/", requireAuth, userController.getAllUsers);
router.get("/:id", requireAuth, userController.getUserById);
router.put("/:id", requireAuth, userController.updateUser);
router.delete("/:id", requireAuth, userController.deleteUser);

export default router;