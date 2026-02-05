import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

const transporterOptions = {
    host: process.env.SMTP_GMAIL_HOST as string,
    port: Number(process.env.SMTP_GMAIL_PORT as string),
    secure: true, // true for port 465, false for other ports
    auth: {
        user: process.env.SMTP_GMAIL_USER as string,
        pass: process.env.SMTP_GMAIL_PASSWORD as string
    },
};

type ContactEmailState = {
    success: boolean;
    message: string;
};

export type SendContactEmail = {
    name?: string;
    email?: string;
    message: string;
};

export default async function sendContactEmail({
    name,
    email,
    message
}: SendContactEmail): Promise<ContactEmailState> {
    try {
        const options: Mail.Options = {
            from: email ?? process.env.FROM_MAIL_ADDRESS,
            to: process.env.TO_MAIL_ADDRESS,
            subject: `${name ?? "Someone"} contacts you through your portfolio.`,
            text: message,
        };

        await nodemailer.createTransport(transporterOptions).sendMail(options);

        return { success: true, message: 'send' };
    } catch(e: any) {
        return { success: false, message: 'error' };
    }
}