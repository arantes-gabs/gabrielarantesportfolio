import ResumePage from "@/components/ResumePage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "https://gabrielarantes.dev";
const ogImage = `${siteUrl}/eu-cropped.png?v=2`;

export const metadata = {
  title: "Currículo | Gabriel Arantes",
  description: "Desenvolvedor Front-end",
  openGraph: {
    title: "Currículo | Gabriel Arantes",
    description: "Desenvolvedor Front-end",
    type: "website",
    locale: "pt_BR",
    url: `${siteUrl}/curriculo`,
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
    title: "Currículo | Gabriel Arantes",
    description: "Desenvolvedor Front-end",
    images: [ogImage],
  },
};

export default function Curriculo() {
  return <ResumePage />;
}
