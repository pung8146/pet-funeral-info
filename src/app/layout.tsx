import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: '반려동물 장례식장 정보',
  description:
    '반려동물 보호자를 위한 장례식장 정보를 지역별, 가격별, 서비스 조건별로 쉽게 비교하고 찾아볼 수 있는 웹 서비스입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-gray-50 min-h-screen`}>
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
