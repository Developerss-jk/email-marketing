import { Router, Request, Response } from 'express';

const emailRoute = Router();

emailRoute.post('/', async (req: Request, res: Response) => {
  const { to, subject, body, delayMinutes } = req.body;

  if (!to || !subject || !body) {
    res.status(400).json({ message: 'Missing required fields.' });
  }

  const delay = delayMinutes ? `${delayMinutes} minutes` : '1 hour';

  //   await agenda.schedule(delay, 'send-email', { to, subject, body });

  res.status(200).json({ message: `Email scheduled in ${delay}` });
});

export { emailRoute };
