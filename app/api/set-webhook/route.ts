import { NextResponse } from 'next/server';
import { getProdWebhookUrl } from '../../../lib/telegram';

export const runtime = 'edge';

export async function GET() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;

  if (!token || !secret) {
    return NextResponse.json({ ok: false, error: 'Missing TELEGRAM_BOT_TOKEN or TELEGRAM_WEBHOOK_SECRET' }, { status: 500 });
  }

  const url = `https://api.telegram.org/bot${token}/setWebhook`;
  const webhookUrl = getProdWebhookUrl();

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ url: webhookUrl, secret_token: secret, allowed_updates: ['message'] })
  });

  const data = await res.json().catch(() => ({}));

  return NextResponse.json({ ok: res.ok, status: res.status, data, webhookUrl });
}
