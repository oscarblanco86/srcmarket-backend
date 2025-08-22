// test-connection.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true'
        ? { require: true, rejectUnauthorized: false }
        : false
    },
    logging: false
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection to Supabase (PostgreSQL) successful.');
  } catch (error) {
    console.error('❌ Unable to connect:', error.message);
  } finally {
    await sequelize.close();
  }
})();
