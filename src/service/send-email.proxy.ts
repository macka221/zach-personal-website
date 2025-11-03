'use server';

import { SendEmailService } from "./send-email.service";

export async function sendEmailProxy({ name, phone, subject, from, body }: { name: string; phone: string; subject: string; from: string; body: string; }) {
  const emailApi = new SendEmailService();

  await emailApi.sendEmail({ name, phone, subject, email: from, body });
}
