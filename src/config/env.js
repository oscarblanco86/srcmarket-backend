import 'dotenv/config'

const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    SECRET_KEY: process.env.SECRET_KEY,
    // DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_SSL: process.env.DB_SSL,
    DB_URL: process.env.DB_URL,
    DB_AKEY: process.env.DB_AKEY,
    // DATABASE_URL: DATABASE_URL=`postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=${DB_SSL == 'true' ? 'require' : 'disable'}`,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
}

export default config