import type { Metadata } from "next";
// import { Container, ThemeProvider } from "@mui/material";
import {Container} from "@mui/material";
import Header from "../components/Header/Header";
import "./globals.css";
// import theme from "../utils/theme";

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
        {/* <ThemeProvider theme={theme}> */}
          <Container maxWidth="xl" sx={{ padding: 0 }}>
            <Header />
            <main>{children}</main>
          </Container>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
