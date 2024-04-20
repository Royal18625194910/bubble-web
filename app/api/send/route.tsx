import { Resend } from 'resend';
import {NextRequest, NextResponse} from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest,res: NextResponse) {
    const { email = '', subject = '', message = '', name = ''} = await req.json();
    console.log('body',{ email , subject , message,name })
    try {
        const data = await resend.emails.send({
            from: `${name} <onboarding@resend.dev>`,
            to: ['2326182533@qq.com'],
            subject,
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Name:{name}</p>
                    <p>from:{email}</p>
                    <p>content:{message}</p>
                </>
            )
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
