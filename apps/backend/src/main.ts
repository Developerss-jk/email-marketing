import dotenv from 'dotenv';
import app from './app';
import { agenda } from './services';

dotenv.config();

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ?? 3001;

(async () => {
  try {
    await agenda.start();
    app.listen(port, () => console.log(`[ ready ] http://${host}:${port}`));
  } catch (error) {
    console.error('Failed to start Agenda or server:', error);
  }
})();

// const defineEmailJob = require('./jobs/emailJob');

// // Define Jobs
// defineEmailJob(agenda);
