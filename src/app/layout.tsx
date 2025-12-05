import type { Metadata } from 'next';
import '../assets/css/globals.css';
import '../assets/css/style.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TECH BLOG',
  description: 'このサイトは勉強の記録をしたTECH BLOGです。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer
          name="鞠"
          description="Web Designer → Frontend Engineer"
          sns={[
            { platform: 'Zenn', url: 'https://zenn.dev/mari_tt' },
            { platform: 'GitHub', url: 'https://github.com/haisamarie' },
          ]}
        />
      </body>
    </html>
  );
}
