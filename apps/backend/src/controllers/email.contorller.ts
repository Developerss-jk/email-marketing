import { Request, Response } from 'express';
import { agenda } from '../services';

export const scheduleEmail = async (req: Request, res: Response) => {
  const { to, subject, body, delayMinutes } = req.body;

  if (!to || !subject || !body) {
    res.status(400).json({ message: 'Missing required fields.' });
  }

  const delay = delayMinutes ? `${delayMinutes} minutes` : '1 hour';

  try {
    await agenda.schedule(delay, 'send-email', { to, subject, body });
    res.status(200).json({ message: `📧 Email scheduled in ${delay}` });
  } catch (err) {
    console.error('Failed to schedule email:', err);
    res.status(500).json({ message: 'Failed to schedule email.' });
  }
};
