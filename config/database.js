const { Sequelize, QueryTypes } = require('sequelize');
const { database } = require('./env');

const sequelize = new Sequelize(
  database.dbName,       // DATABASE_NAME
  database.dbUser,       // DATABASE_USER
  database.dbPassword,   // DATABASE_PASSWORD
  {
    host: database.dbHost,   // DATABASE_HOST
    port: database.dbPort ?? 3306,
    dialect: 'mariadb',
    logging: false,
    pool: { max: 10, min: 1, acquire: 30000, idle: 10000 },
  }
);

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connection established.');
  } catch (error) {
    console.error('Unable to connect to the database:', error?.message || error);
    process.exit(1);
  }
};

const executeSelect = async (query, replacements = {}) => {
  try {
    return await sequelize.query(query, { replacements, type: QueryTypes.SELECT });
  } catch (error) {
    throw new Error(`Database SELECT error: ${error?.message || error}`);
  }
};

const executeCall = async (query, replacements = {}) => {
  try {
    const [results, metadata] = await sequelize.query(query, { replacements });
    return { results, metadata };
  } catch (error) {
    throw new Error(`Database CALL error: ${error?.message || error}`);
  }
};

module.exports = {
  sequelize,
  authenticate,
  executeSelect,
  executeCall,
};
