import React from "react";
import { Toaster } from "react-hot-toast";
import { NextAuthProvider } from "../providers/sessionProvider";
import "./globals.css";

export const metadata = {
  title: "Lab BK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
            }}
          />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
