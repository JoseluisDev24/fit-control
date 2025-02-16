import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Box, Container} from "@mui/material"
import Header from "../components/Layout/Header/Header";
import "./globals.css";


export const metadata: Metadata = {
  title: "Fit Control",
  description: "Control your gym clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-gradient-to-b from-slate-200 to-slate-100">
        <Container maxWidth="xl" className="flex flex-col h-screen " sx={{padding: 0}}>
          <Header />
        </Container>
      </body>
    </html>
  );
}
