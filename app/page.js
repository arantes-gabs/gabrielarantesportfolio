import LandingPage from "@/components/LandingPage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "https://gabrielarantes.dev";
const ogImage = `${siteUrl}/eu-cropped.png?v=2`;

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
};

export default function Home() {
  return <LandingPage />;
}
