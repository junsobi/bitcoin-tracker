import './globals.css';
import { Bricolage_Grotesque } from 'next/font/google';

import { metadata as meta } from '@/app/config';
import { createMetadata } from '@/lib/metadata';

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ['latin'] });

export const metadata = createMetadata({
  title: {
    absolute: meta.site.title,
    template: `%s | ${meta.site.title}`,
  },
  description: meta.site.description,
  twitter: {
    title: meta.site.title,
    description: meta.site.description,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolage_grotesque.className} font-pretendard antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
