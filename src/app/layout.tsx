'use client';

import { Jacquarda_Bastarda_9 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@emotion/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "./theme";
import Head from "next/head";

const jBastarda9Font = Jacquarda_Bastarda_9({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-jacquarda-bastarda-9",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jBastarda9Font.variable}>
      <Head>
        <title>Zach's Developer Platform</title>
      </Head>
      <body>
        <AppRouterCacheProvider
          options={{ key: 'css' }}
        >
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
