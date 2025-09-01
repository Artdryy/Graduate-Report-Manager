// config/envSchema.js
require('dotenv').config();
const Joi = require('joi');

const envSchema = Joi.object({
  // App
  NODE_ENV: Joi.string().valid('development', 'test', 'production').default('development'),
  PORT: Joi.number().default(3000),
  API_KEY: Joi.string().trim().allow(null, ''), 

  // DB (MariaDB)
  DATABASE_HOST: Joi.string().trim().required(),
  DATABASE_NAME: Joi.string().trim().required(),
  DATABASE_USER: Joi.string().trim().required(),
  DATABASE_PASSWORD: Joi.string().trim().required(),
  DATABASE_PORT: Joi.number().default(3306),

}).unknown();

const { error, value: envValues } = envSchema.validate(process.env);
if (error) {
  console.error('Invalid environment config:', error.details.map(e => e.message).join(', '));
  process.exit(1);
}

module.exports = { envValues };
