import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Neeraj Manchanda",
  description: "Portfolio project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/meta-icon.png" sizes="128x128" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
