/* eslint-disable @next/next/no-page-custom-font */

import React from 'react';
import 'thon-ui/core/base.css';
import '../src/shared/css/globals.css';
import '../src/homepage/css/homepage.css';
import MainFooter from '../src/shared/components/main-footer';
import MainHeader from '../src/shared/components/main-header';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossorigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* w-full lg:w-[26.5rem] xl:w-[34.25rem] */}
      <body className="lg:grid lg:grid-cols-[26.5rem_1fr] xl:grid-cols-[34.25rem_1fr]">
        <MainHeader />
        <main className="p-10">
          {children}

          <MainFooter />
        </main>
      </body>
    </html>
  );
}
