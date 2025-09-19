'use client';

import { Jacquarda_Bastarda_9 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@emotion/react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "./theme";
import { loadEnvConfig } from "@next/env";

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
