import type { Metadata } from 'next';
import { Fira_Mono, Open_Sans } from 'next/font/google';
import './globals.css';

const firaMono = Fira_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-fira-mono',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-open-sans',
});
export const metadata: Metadata = {
  title: "Anis' Portfolio",
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaMono.variable} ${openSans.variable} bg-black text-white overflow-x-hidden `}
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function smoothScroll(id) {
                const element = document.getElementById(id);
                if (element) {
                  const elementYPosition = element.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({
                    top: elementYPosition,
                    behavior: "smooth",
                  });
                }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
