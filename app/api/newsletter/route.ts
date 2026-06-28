import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      console.error('Newsletter signup: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.');
      return NextResponse.json({ error: 'Email service is not configured yet.' }, { status: 500 });
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'RenewGuard <onboarding@resend.dev>',
        to: toEmail,
        subject: 'New newsletter subscriber',
        text: `New subscriber: ${email}`,
      }),
    });

    if (!resendRes.ok) {
      console.error('Resend API error:', await resendRes.text());
      return NextResponse.json({ error: 'Failed to subscribe. Please try again.' }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Newsletter signup error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
