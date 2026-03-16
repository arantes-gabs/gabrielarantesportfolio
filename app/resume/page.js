import ResumePage from "@/components/ResumePage";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "https://gabrielarantes.dev";
const ogImage = `${siteUrl}/eu-cropped.png?v=2`;

export const metadata = {
  title: "Resume | Gabriel Arantes",
  description: "Front-end Developer",
  openGraph: {
    title: "Resume | Gabriel Arantes",
    description: "Front-end Developer",
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/resume`,
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
    title: "Resume | Gabriel Arantes",
    description: "Front-end Developer",
    images: [ogImage],
  },
};

export default function Resume() {
  return <ResumePage />;
}
