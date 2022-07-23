import Database from './database/database';
import server from './server';
import initializeEnvironment from './environment';

initializeEnvironment();

async function start() {
  try {
    await Database.initialize();
    server.listen(process.env.PORT, () => {
      console.log(`app listening on port ${process.env.PORT}`);
    });
  } catch (e) {
    console.error('server start error', e);
  }
}

start();
