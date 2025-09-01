import 'dotenv/config';
import createServer from './config/server.js';
import { globalConfig } from './config/env.js';
import { authenticate } from './config/database.js';


const PORT = globalConfig.port;
const HOST = '0.0.0.0';


async function start() {
  try {
    await authenticate();
    const app = createServer();
    await app.listen({ port: PORT, host: HOST });
    app.log.info(`Server listening on http://${HOST}:${PORT}`);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}


start();