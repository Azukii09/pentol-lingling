import "./globals.css";
import React from "react";
import {roboto} from "@/lib/font/font";
import {NextIntlClientProvider} from "next-intl";
import Navigation from "@/component/layout/navigation/Navigation";
import Footer from "@/component/layout/navigation/Footer";

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
        <NextIntlClientProvider>
            <Navigation/>
            {children}
            <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
