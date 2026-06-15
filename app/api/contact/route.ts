import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, phone, location, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Verplichte velden ontbreken.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.strato.de',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const locationLabel = location === 'heiloo' ? 'Heiloo' : location === 'schiphol' ? 'Schiphol-Rijk' : 'Geen voorkeur';

  await transporter.sendMail({
    from: `"rTMS Behandeling" <${process.env.SMTP_USER}>`,
    to: 'info@rtms-behandeling.nl',
    replyTo: email,
    subject: `Nieuw contactformulier: ${name}`,
    text: `
Naam: ${name}
E-mail: ${email}
Telefoon: ${phone || '-'}
Voorkeur locatie: ${locationLabel}

Bericht:
${message}
    `.trim(),
    html: `
<p><strong>Naam:</strong> ${name}</p>
<p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
<p><strong>Telefoon:</strong> ${phone || '-'}</p>
<p><strong>Voorkeur locatie:</strong> ${locationLabel}</p>
<br>
<p><strong>Bericht:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
