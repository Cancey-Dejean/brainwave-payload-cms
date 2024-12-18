import { draftMode } from "next/headers";
import "./globals.css";
import { sora, sourceCodePro, spaceGrotesk } from "@/utils/fonts";

import { PreviewMode } from "@/utils/preview-mode";
import Header, { MenuItem } from "@/components/ui/Header";
import { LivePreviewListener } from "@/utils/live-preview-listener";
import ButtonGradient from "@/components/ui/Button/ButtonGradient";
import config from "@payload-config";
import { getPayload } from "payload";
import { LinkItem, SimpleImage, SocialMedia } from "@/types";
import Footer from "@/components/ui/Footer";
import SkipToButton from "@/components/SkipToButton";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getPayload({ config });

  const [header, siteSettings] = await Promise.all([
    payload.findGlobal({
      slug: "header",
    }),
    payload.findGlobal({
      slug: "site-settings",
    }),
  ]);

  const { primaryMenu, secondaryMenu, logo } = header;
  const secondaryMenuItems = secondaryMenu?.[0].menu;
  const ctaButton = secondaryMenu?.[0].ctaButton;
  const socialMedia = siteSettings?.socialMedia;

  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${sourceCodePro.variable} ${spaceGrotesk.variable} relative`}
      >
        <SkipToButton url="#main" text="Content" />
        <SkipToButton url="#footer" text="Footer" />

        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
          <Header
            primaryMenu={primaryMenu as MenuItem[]}
            secondaryMenu={secondaryMenuItems as LinkItem[]}
            ctaButton={ctaButton as LinkItem}
            logo={logo as SimpleImage}
          />
          <main
            id="main"
            role="main"
            className="flex flex-col overflow-x-hidden pt-[4.75rem] lg:pt-[5.25rem]"
          >
            {children}
          </main>
          <Footer socialMedia={socialMedia as SocialMedia[]} />
          <ButtonGradient />
        </div>
        {isDraftMode && <PreviewMode />}

        <LivePreviewListener />
      </body>
    </html>
  );
}
