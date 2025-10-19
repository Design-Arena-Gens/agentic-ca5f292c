import Link from 'next/link';

const prodUrl = 'https://agentic-ca5f292c.vercel.app';

export default function Page() {
  return (
    <div className="container">
      <div className="card" style={{ marginBottom: 16 }}>
        <span className="badge">Next.js + Telegram</span>
        <h1 className="h1">Build a Telegram Bot with Webhooks</h1>
        <p className="p">Deployable on Vercel with an Edge-ready webhook handler.</p>
      </div>

      <div className="grid">
        <div className="card">
          <h2 className="h2">Quick Start</h2>
          <ol className="p" style={{ paddingLeft: 18 }}>
            <li>Talk to <a className="link" href="https://t.me/BotFather" target="_blank" rel="noreferrer">BotFather</a> and create a bot. Copy your bot token.</li>
            <li>Set two environment variables in your deployment:
              <ul>
                <li><code className="code">TELEGRAM_BOT_TOKEN</code>: your bot token</li>
                <li><code className="code">TELEGRAM_WEBHOOK_SECRET</code>: any strong random string</li>
              </ul>
            </li>
            <li>Call the webhook setup endpoint:
              <div className="code" style={{ marginTop: 8 }}>
                {prodUrl}/api/set-webhook
              </div>
            </li>
            <li>Send your bot a message. It will echo and reply to <code className="code">/start</code>.</li>
          </ol>
          <p className="small">The webhook URL is {prodUrl}/api/telegram and is protected by Telegram's secret token header.</p>
        </div>
        <div className="card">
          <h2 className="h2">Endpoints</h2>
          <ul className="p" style={{ paddingLeft: 18 }}>
            <li><code className="code">GET /api/set-webhook</code>: registers the webhook for this deployment</li>
            <li><code className="code">POST /api/telegram</code>: receives Telegram updates</li>
          </ul>
          <h2 className="h2">Customize</h2>
          <p className="p">Edit <code className="code">app/api/telegram/route.ts</code> to change behavior.</p>
          <h2 className="h2">Security</h2>
          <p className="p">We verify <code className="code">x-telegram-bot-api-secret-token</code> for every update.</p>
          <Link className="link" href="/api/set-webhook">Set webhook now →</Link>
        </div>
      </div>
    </div>
  );
}
