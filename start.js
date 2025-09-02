import 'dotenv/config';
import createServer from './config/server.js'; // This imports the default export from server.js
import { globalConfig } from './config/env.js'; // This works with the named export
import { authenticate } from './config/database.js'; // Ensure authenticate is imported correctly

const PORT = globalConfig.port;
const HOST = '0.0.0.0';

async function start() {
  try {
    await authenticate(); // Ensure this is called after the import
  const app = createServer;  // Now `createServer` is the default export from `server.js`
    await app.listen({ port: PORT, host: HOST });
    app.log.info(`Server listening on http://${HOST}:${PORT}`);
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

start();
