import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, phone, complaint, location, hasReferral } = await req.json();

  if (!firstName || !lastName || !email || !phone || !complaint || !location) {
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

  const locationLabel = location === 'heiloo' ? 'Heiloo' : 'Schiphol-Rijk';
  const complaintLabels: Record<string, string> = {
    'depressie': 'Depressie',
    'burn-out': 'Burn-out / Overspanning',
    'angst': 'Angststoornis',
    'ocd': 'Dwangstoornis (OCD)',
    'tinnitus': 'Tinnitus (Oorsuizen)',
    'andere': 'Andere hulpvraag',
  };
  const complaintLabel = complaintLabels[complaint] || complaint;
  const referralText = hasReferral ? 'Ja' : 'Nee';

  await transporter.sendMail({
    from: `"rTMS Behandeling" <${process.env.SMTP_USER}>`,
    to: 'info@rtms-behandeling.nl',
    replyTo: email,
    subject: `Nieuwe intake aanvraag: ${firstName} ${lastName}`,
    text: `
Naam: ${firstName} ${lastName}
E-mail: ${email}
Telefoon: ${phone}
Hulpvraag: ${complaintLabel}
Voorkeurslocatie: ${locationLabel}
SGGZ-verwijsbrief: ${referralText}
    `.trim(),
    html: `
<h2>Nieuwe intake aanvraag</h2>
<p><strong>Naam:</strong> ${firstName} ${lastName}</p>
<p><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
<p><strong>Telefoon:</strong> ${phone}</p>
<p><strong>Hulpvraag:</strong> ${complaintLabel}</p>
<p><strong>Voorkeurslocatie:</strong> ${locationLabel}</p>
<p><strong>SGGZ-verwijsbrief:</strong> ${referralText}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
