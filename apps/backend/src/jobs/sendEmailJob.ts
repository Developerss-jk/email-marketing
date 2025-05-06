import Agenda, { Job } from 'agenda';
import { transporter } from '../services';

export default (agenda: Agenda) => {
  agenda.define('send-email', async (job: Job) => {
    const { to, subject, body } = job.attrs.data;
    const from = process.env.SES_SENDER_EMAIL;

    try {
      transporter.verify((err, success) => {
        if (err) {
          console.error('Transporter verification failed:', err);
        } else {
          console.log('SES transporter is ready to send messages', success);
        }
      });

      await transporter.sendMail({
        from,
        to,
        subject,
        html: body,
      });

      console.log(`Email sent to ${to}`);
    } catch (err) {
      console.error(`Failed to send email to ${to}:`, err);
    }
  });
};
