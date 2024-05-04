import type {NextApiRequest, NextApiResponse} from 'next';
import {EmailTemplate} from '@/components/EmailTemplate';
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const {name, content} = req.body;

    const {data, error} = await resend.emails.send({
        from: `${process.env.FROM_EMAIL}`,
        to: `${process.env.TO_EMAIL}`,
        subject: 'Contact Portfolio',
        react: EmailTemplate({name: name, content: content}),
    });

    if (error) {
        return res.status(400).json(error);
    }

    res.status(200).json(data);
};
