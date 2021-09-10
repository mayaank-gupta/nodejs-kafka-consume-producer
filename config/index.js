require('dotenv').config();
const config = {
  API_MOUNT_POINT: process.env.MOUNT_POINT,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD
}


module.exports = config;