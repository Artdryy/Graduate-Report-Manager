// config/env.js
const { envValues } = require('./envSchema');

const config = {
  globalConfig: {
    port: envValues.PORT,
    apiKey: envValues.API_KEY,          
    nodeEnv: envValues.NODE_ENV,
  },
  database: {
    dbHost: envValues.DATABASE_HOST,
    dbName: envValues.DATABASE_NAME,
    dbUser: envValues.DATABASE_USER,
    dbPassword: envValues.DATABASE_PASSWORD,
    dbPort: envValues.DATABASE_PORT,
  },
};

module.exports = config;
