import { Router } from 'express';
import { scheduleEmail } from '../controllers';

const emailRoute = Router();

emailRoute.post('/', scheduleEmail);

export { emailRoute };
