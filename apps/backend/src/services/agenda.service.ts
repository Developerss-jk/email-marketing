import Agenda from 'agenda';
import sendEmailJob from '../jobs/sendEmailJob';
import dotenv from 'dotenv';

dotenv.config();
const address = process.env.MONGODB_URI || 'mongodb://localhost:27017/agenda';
const collection = process.env.MONGODB_COLLECTION || 'emailJobs';
const agenda = new Agenda({
  db: {
    address,
    collection,
  },
});

agenda.on('ready', async () => {
  sendEmailJob(agenda);
  await agenda.start();
});

export { agenda };
