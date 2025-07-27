import '../styles/globals.css';
import '../styles/theme.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Download Our Trusted App",
  description: "Join thousands who trust our app. Download now!",
  openGraph: {
    title: "Download Our Trusted App",
    description: "Join thousands who trust our app. Download now!",
    images: ['/og-image.png'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Our Trusted App",
    description: "Join thousands who trust our app.",
    images: ['/og-image.png'],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
