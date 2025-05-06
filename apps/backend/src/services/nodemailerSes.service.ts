import nodemailer from 'nodemailer';
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

const sesClient = new SESv2Client({ region: process.env.AWS_REGION });

export const transporter = nodemailer.createTransport({
  SES: { sesClient, SendEmailCommand },
});
