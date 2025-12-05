import type { Metadata } from 'next';
import '../assets/css/globals.css';
import '../assets/css/style.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '鞠の記録',
  description: 'このサイトは私の日々の記録です。',
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
