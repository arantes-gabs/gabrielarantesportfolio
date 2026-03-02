import LandingPage from "@/components/LandingPage";

export const metadata = {
  title: "Gabriel Arantes",
  description: "Desenvolvedor Front-end",
  openGraph: {
    title: "Gabriel Arantes",
    description: "Desenvolvedor Front-end",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/eu-cropped.png",
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
    images: ["/eu-cropped.png"],
  },
};

export default function Home() {
  return <LandingPage />;
}
