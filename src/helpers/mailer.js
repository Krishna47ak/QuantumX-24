import EmailTemplate from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ email, name, eventName }) => {
    try {
        const data = await resend.emails.send({
            from: 'QuantumX <info@quantumxfest.com>',
            to: [email],
            subject: 'Registration successful',
            react: EmailTemplate({ name, eventName }),
        });

        return Response.json(data);
    } catch (error) {
        console.log(error);
        return Response.json({ error });
    }
}
