import { NextRequest, NextResponse } from 'next/server';
import { sendTelegramMessage, type TelegramUpdate } from '../../../lib/telegram';

export const runtime = 'edge';

function verifySecret(req: NextRequest): boolean {
  const incoming = req.headers.get('x-telegram-bot-api-secret-token');
  const expected = process.env.TELEGRAM_WEBHOOK_SECRET;
  return Boolean(expected && incoming && incoming === expected);
}

export async function GET() {
  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  if (!verifySecret(req)) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  let update: TelegramUpdate | null = null;
  try {
    update = (await req.json()) as TelegramUpdate;
  } catch {
    return new NextResponse('Bad Request', { status: 400 });
  }

  if (update?.message) {
    const chatId = update.message.chat.id;
    const text = (update.message.text || '').trim();

    if (text.startsWith('/start')) {
      const name = update.message.from?.first_name || 'there';
      await sendTelegramMessage({ chat_id: chatId, text: `Hi ${name}! Your bot is live on Vercel.` });
    } else if (text.length > 0) {
      await sendTelegramMessage({ chat_id: chatId, text: `Echo: ${text}`, reply_to_message_id: update.message.message_id });
    }
  }

  return NextResponse.json({ ok: true });
}
