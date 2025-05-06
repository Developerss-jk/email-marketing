import express from 'express';
import { emailRoute } from './routes';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});
app.use('/api/email', emailRoute);

export default app;
