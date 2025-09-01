// src/app/server.js
import express from 'express';
import routes from '#routes/index.js';
// import errorMiddleware from '#app/middleware/error.middleware.js';
// import loggerMiddleware from '#app/middleware/logger.middleware.js';

const app = express();

app.use(express.json());
// app.use(loggerMiddleware);
app.use('/api', routes);
// app.use(errorMiddleware);

export default app;
