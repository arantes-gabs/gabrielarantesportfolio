import ResumePage from "@/components/ResumePage";

export const metadata = {
  title: "Currículo | Gabriel Arantes",
  description: "Desenvolvedor Front-end",
  openGraph: {
    title: "Currículo | Gabriel Arantes",
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
    title: "Currículo | Gabriel Arantes",
    description: "Desenvolvedor Front-end",
    images: ["/eu-cropped.png"],
  },
};

export default function Curriculo() {
  return <ResumePage />;
}
