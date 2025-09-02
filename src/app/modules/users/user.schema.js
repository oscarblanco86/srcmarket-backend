// model User {
//   id         Int       @id @default(autoincrement())
//   name       String
//   mail       String    @unique
//   password   String
//   phone      String

//   business   Business?
//   sessions   Session[]
//   tokens     Token[]

//   // Soft delete
//   deletedAt  DateTime?
// }

import e from 'express'
import {z} from 'zod'
import { id } from 'zod/locales'

export const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(3, 'Username must be at least 3 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    phone: z.string().min(10, 'Phone number must be at least 10 characters'),
    business: z.string().optional(),
    sessions: z.array(z.string()).optional(),
    tokens: z.array(z.string()).optional(),
    deletedAt: z.date().optional(),
  }),
})

export const updateUserSchema = z.object({
  body: z.object({
    name: z.string().min(3, 'Username must be at least 3 characters').optional(),
    email: z.string().email('Invalid email address').optional(),
    password: z.string().min(6, 'Password must be at least 6 characters').optional(),
    phone: z.string().min(10, 'Phone number must be at least 10 characters').optional(),
    business: z.string().optional(),
    sessions: z.array(z.string()).optional(),
    tokens: z.array(z.string()).optional(),
    deletedAt: z.date().optional(),
  }),
  params: z.object({
    id: z.string().regex(/^\d+$/, 'Invalid user ID'),
  }),
})

export const getUserSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'Invalid user ID'),
  }),
})

export const deleteUserSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'Invalid user ID'),
  }),
})