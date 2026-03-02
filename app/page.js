import LandingPage from "@/components/LandingPage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";
const ogImage = `${siteUrl}/eu-cropped.png`;

export const metadata = {
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
        width: 1200,
        height: 630,
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
};

export default function Home() {
  return <LandingPage />;
}
