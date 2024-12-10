import { draftMode } from "next/headers";
import "./globals.css";
import { sora, sourceCodePro, spaceGrotesk } from "@/utils/fonts";

import { PreviewMode } from "@/utils/preview-mode";
import Header, { MenuItem } from "@/components/ui/Header";
import { LivePreviewListener } from "@/utils/live-preview-listener";
import ButtonGradient from "@/components/ui/Button/ButtonGradient";
import config from "@payload-config";
import { getPayload } from "payload";
import { LinkItem, SimpleImage } from "@/types";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getPayload({ config });

  const header = await payload.findGlobal({
    slug: "header",
  });

  const { primaryMenu, secondaryMenu, logo } = header;
  const secondaryMenuItems = secondaryMenu?.[0].menu;
  const ctaButton = secondaryMenu?.[0].ctaButton;

  // console.log(secondaryMenu);
  const { isEnabled: isDraftMode } = await draftMode();
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${sourceCodePro.variable} ${spaceGrotesk.variable}`}
      >
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
          <Header
            primaryMenu={primaryMenu as MenuItem[]}
            secondaryMenu={secondaryMenuItems as LinkItem[]}
            ctaButton={ctaButton as LinkItem}
            logo={logo as SimpleImage}
          />
          <main
            role="main"
            className="flex flex-col overflow-x-hidden pt-[4.75rem] lg:pt-[5.25rem]"
          >
            {children}
          </main>
          {/* <Footer /> */}
          <ButtonGradient />
        </div>
        {isDraftMode && <PreviewMode />}

        <LivePreviewListener />
      </body>
    </html>
  );
}
