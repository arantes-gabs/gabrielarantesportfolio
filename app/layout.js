import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "https://gabrielarantes.dev";
const ogImage = `${siteUrl}/eu-cropped.png?v=2`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gabriel Arantes",
  description: "Desenvolvedor Front-end",
  openGraph: {
    title: "Gabriel Arantes",
    description: "Desenvolvedor Front-end",
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Gabriel Arantes",
    images: [
      {
        url: ogImage,
        width: 1024,
        height: 972,
        alt: "Gabriel Arantes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Arantes",
    description: "Desenvolvedor Front-end",
    images: [ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.png?v=4", type: "image/png", sizes: "32x32" }],
    shortcut: ["/favicon.png?v=4"],
    apple: [{ url: "/favicon.png?v=4", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
