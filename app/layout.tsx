import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Telegram Bot on Vercel',
  description: 'Next.js Telegram webhook starter'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji',
        background: 'linear-gradient(180deg, #0f172a 0%, #0b1220 100%)',
        color: '#e5e7eb',
        minHeight: '100vh'
      }}>
        {children}
      </body>
    </html>
  );
}
