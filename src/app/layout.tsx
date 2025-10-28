import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'USDT Approve with Privy Gas Sponsorship',
  description: 'Simple demo for USDT approve with gas sponsorship',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}