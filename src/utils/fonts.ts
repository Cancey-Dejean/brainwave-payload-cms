import localFont from "next/font/local";

export const sora = localFont({
  src: "../../public/fonts/Sora-VF.woff2",
  variable: "--font-sora",
  weight: "300 400 600",
});

export const sourceCodePro = localFont({
  src: "../../public/fonts/SourceCodePro-VF.woff2",
  variable: "--font-source-code-pro",
  weight: "400 600 700",
});

export const spaceGrotesk = localFont({
  src: "../../public/fonts/SpaceGrotesk-VF.woff2",
  variable: "--font-space-grotesk",
  weight: "400",
});
