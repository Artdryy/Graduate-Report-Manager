import { envValues } from './envSchema.js'

const envConfig = {
    database: {
        name: envValues.DATABASE_NAME,
        user: envValues.DATABASE_USER,
        password: envValues.DATABASE_PASSWORD,
        host: envValues.DATABASE_HOST,
        port: envValues.DATABASE_PORT,
    },
    global: {
        port: envValues.PORT,
    }
}

// Export the config object as globalConfig
export const globalConfig = envConfig.global;  // Add this export

export { envConfig };  // Also export envConfig if needed elsewhere
