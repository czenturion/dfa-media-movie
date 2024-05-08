import {Inter} from "next/font/google";
import "./styles/globals.scss";
import Header from "@/app/components/header/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "The Movies Data Base ",
  description: "Generated by create next app",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <div>
      <Header />
      {children}
    </div>
    </body>
    </html>
  );
}
