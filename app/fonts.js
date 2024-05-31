import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"] });

export const neueRegular = localFont({
  src: "../public/fonts/Neue/PPNeueMachina-PlainRegular.otf",
  subsets: ["latin"],
});

export const neueBold = localFont({
  src: "../public/fonts/Neue/PPNeueMachina-PlainUltrabold.otf",
  subsets: ["latin"],
});

export const phatt = localFont({
  src: "../public/fonts/Phatt.woff2",
  subsets: ["latin"],
});
export const phattOutline = localFont({
  src: "../public/fonts/Phatt-outline.woff2",
  subsets: ["latin"],
});

export const soehneBreitt = localFont({
  src: "../public/fonts/soehne-breit-web-fett.woff2",
  subsets: ["latin"],
});

export const soehne = localFont({
  src: "../public/fonts/soehne-web-fett.woff2",
  subsets: ["latin"],
});

export const interVar = localFont({
  src: "../public/fonts/Inter-var.woff2",
  subsets: ["latin"],
});

export const suprapowerMedium = localFont({
  src: "../public/fonts/Suprapower-Medium.woff2",
  subsets: ["latin"],
});

export const suprapower = localFont({
  src: "../public/fonts/Suprapower-Regular.woff2",
  subsets: ["latin"],
});
