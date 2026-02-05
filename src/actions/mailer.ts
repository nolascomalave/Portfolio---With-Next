// src/actions/mailer.ts
'use server';

import sendContactEmail, { SendContactEmail } from '@/lib/mailer.server';

export async function sendMailAction(data: SendContactEmail) {
  return await sendContactEmail(data);
}