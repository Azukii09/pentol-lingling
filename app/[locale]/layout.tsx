import "./globals.css";
import React from "react";
import {roboto} from "@/lib/font/font";
import {NextIntlClientProvider} from "next-intl";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
