import Agenda, { Job } from 'agenda';
import { transporter } from '../services';

export default (agenda: Agenda) => {
  agenda.define('send-email', async (job: Job) => {
    const { to, subject, body } = job.attrs.data;
    const from = process.env.SES_SENDER_EMAIL;

    try {
      await transporter.sendMail({
        from,
        to,
        subject,
        text: body,
      });

      console.log(`Email sent to ${to}`);
    } catch (err) {
      console.error(`Failed to send email to ${to}:`, err);
    }
  });
};
