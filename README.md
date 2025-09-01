# SRC Market – Backend

Backend service for **SRC Market**, built with Node.js, TypeScript, and Prisma.  
This repository contains the API, business logic, and database layer for managing users, businesses, products, and related resources.

---

## 📂 Project Structure
```
src/
  app/
    server.ts
    routes/
      auth.routes.ts       # Mounts /auth endpoints
    middlewares/
      auth.middleware.ts   # Protects routes (JWT/session check)
  modules/
    auth/
      auth.controller.ts   # Handles HTTP requests/responses
      auth.service.ts      # Business logic (login, signup, refresh)
      auth.repository.ts   # DB access for users/tokens
      auth.schema.ts       # Zod validation for request bodies
    products/
      product.controller.ts
      product.service.ts
      product.repository.ts
      product.schema.ts
    users/
      user.controller.ts
      user.service.ts
      user.repository.ts
      user.schema.ts```
│
├── prisma/               # Prisma-specific code (isolated)
│   ├── schema.prisma
│   ├── migrations/
│   └── client.ts         # PrismaClient singleton
│
├── config/               # Environment & app-wide settings
│   ├── env.ts            # Type-safe env loader (dotenv + zod)
│   └── logger.ts         # Pino/Winston config
│
├── utils/                # Pure helper functions (no side effects)
│   ├── date.util.ts
│   ├── currency.util.ts
│   └── ...
│
├── types/                # Global TypeScript types/interfaces
│   └── index.d.ts
│
└── index.ts              # Entry point for running app (calls app/server)
```
---

## 🔌 API Endpoints

### **Auth**
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST   | `/auth/register` | Public | Create a new user |
| POST   | `/auth/login` | Public | Login, return token/session |
| POST   | `/auth/logout` | Protected | Logout current session |
| POST   | `/auth/refresh` | Public (requires valid refresh token) | Refresh access token |
| POST   | `/auth/request-password-reset` | Public | Send reset link/token |
| POST   | `/auth/reset-password` | Public | Reset password with token |
| POST   | `/auth/verify-email` | Public | Verify email with token |

---

### **Users**
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET    | `/users/me` | Protected | Get current user profile |
| PATCH  | `/users/me` | Protected | Update current user profile |

---

### **Businesses**
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET    | `/businesses` | Public | List all businesses (filters optional) |
| GET    | `/businesses/:id` | Public | Get business details |
| POST   | `/businesses` | Protected (Owner only) | Create business |
| PATCH  | `/businesses/:id` | Protected (Owner only) | Update business |
| DELETE | `/businesses/:id` | Protected (Owner only) | Delete business |

---

### **Business Pictures**
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET    | `/businesses/:businessId/pictures` | Public | List business pictures |
| POST   | `/businesses/:businessId/pictures` | Protected (Owner only) | Add picture |
| DELETE | `/businesses/:businessId/pictures/:pictureId` | Protected (Owner only) | Remove picture |

---

### **Products**
| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET    | `/businesses/:businessId/products` | Public | List products for a business |
| GET    | `/products/:id` | Public | Get product details |
| POST   | `/businesses/:businessId/products` | Protected (Owner only) | Create product |
| PATCH  | `/products/:id` | Protected (Owner only) | Update product |
| DELETE | `/products/:id` | Protected (Owner only) | Delete product |

---

## 🛠 Tech Stack
- **Node.js** + **TypeScript**
- **Prisma** ORM
- **Express/Fastify/Koa** (depending on implementation)
- **Zod** for validation
- **Pino/Winston** for logging

---

## 📌 Notes
- All protected routes require a valid JWT access token.
- Owner‑only routes require ownership verification middleware.
- Environment variables are loaded via `config/env.ts` and validated with Zod.




POST   /auth/register                  # Public - Create a new user
POST   /auth/login                     # Public - Login, return token/session
POST   /auth/logout                    # Protected - Logout current session
POST   /auth/refresh                   # Public (requires valid refresh token)
POST   /auth/request-password-reset    # Public - Send reset link/token
POST   /auth/reset-password            # Public - Reset password with token
POST   /auth/verify-email              # Public - Verify email with token

GET    /users/me                       # Protected - Get current user profile
PATCH  /users/me                       # Protected - Update current user profile


GET    /businesses                     # Public - List all businesses (filters optional)
GET    /businesses/:id                 # Public - Get business details

POST   /businesses                     # Protected (Owner only) - Create business
PATCH  /businesses/:id                 # Protected (Owner only) - Update business
DELETE /businesses/:id                 # Protected (Owner only) - Delete business


GET    /businesses/:businessId/pictures                  # Public - List business pictures
POST   /businesses/:businessId/pictures                  # Protected (Owner only) - Add picture
DELETE /businesses/:businessId/pictures/:pictureId       # Protected (Owner only) - Remove picture


GET    /businesses/:businessId/products                  # Public - List products for a business
GET    /products/:id                                     # Public - Get product details

POST   /businesses/:businessId/products                  # Protected (Owner only) - Create product
PATCH  /products/:id                                     # Protected (Owner only) - Update product
DELETE /products/:id                                     # Protected (Owner only) - Delete product
