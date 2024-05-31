import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

export const metadata = getSEOTags({
  title: "Stockholm Aid - STHLM AID - Charity Concert in Stockholm",
  description:
    "Join us for the STHLM AID (Stockholm Aid) Charity Concert at Trädgården, Stockholm on May 30th. Secure your tickets now!",
  keywords: [
    "Stockholm Aid",
    "Välgörenhetskonsert",
    "Gaza Aid",
    "Live Music",
    "Trädgården Stockholm",
    "Stockholm Event",
    "Stockholm Charity",
    "STHLMAID",
    "STHLM AID",
    "Under Bron konsert",
    "Trädgården konsert",
    "Musikfestival",
    "Sommar i Stockholm",
  ],
  canonicalUrlRelative: "/",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
        </head>
      )}
      <body className="bg-homepage-black">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
