import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { cn } from '@/utils/cn';
import { Inter } from 'next/font/google';
import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main
        className={cn(
          inter.className,
          'flex min-h-screen min-w-full flex-col items-center justify-center gap-10 py-10 lg:py-0'
        )}
      >
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
}
