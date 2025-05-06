import nodemailer from 'nodemailer';
import { SESClient } from '@aws-sdk/client-ses';
import { SendRawEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({ region: process.env.AWS_REGION || 'us-east-1' });

export const transporter = nodemailer.createTransport({
  SES: { ses, aws: { SendRawEmailCommand } },
});
