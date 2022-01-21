import type { DefaultSeoProps } from "next-seo";

export const baseUrl = "https://medium-clone-martstech.vercel.app";

export const defaultSEO: DefaultSeoProps = {
  title: "Medium Clone",
  description:
    "Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Medium Clone",
    images: [
      {
        url: `${baseUrl}/favicons/icon.png`,
        alt: "Medium Clone",
      },
    ],
  },
};
