import Container from "@/components/Container";
import Section from "@/components/Section";
import { SocialMedia } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Footer({
  socialMedia,
}: {
  socialMedia: SocialMedia[];
}) {
  return (
    <footer className="mt-auto">
      <Section className="!py-10" showCrosses>
        <Container className="flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
          <p className="caption text-brand-150 lg:block">
            © {new Date().getFullYear()}. All rights reserved.
          </p>

          {socialMedia.length > 0 && (
            <ul className="flex flex-wrap gap-5">
              {socialMedia.map((item: any, index: number) => (
                <Link
                  key={index}
                  href={item.url || "#"}
                  target="_blank"
                  className="bg-brand-800 hover:bg-brand-600 flex size-10 items-center justify-center rounded-full transition-colors"
                >
                  <Image
                    src={
                      item.label === "Instagram"
                        ? "/images/socials/instagram.svg"
                        : item.label === "Facebook"
                          ? "/images/socials/facebook.svg"
                          : item.label === "Twitter"
                            ? "/images/socials/twitter.svg"
                            : item.label === "Telegram"
                              ? "/images/socials/telegram.svg"
                              : item.label === "Discord"
                                ? "/images/socials/discord.svg"
                                : "https://dummyimage.com/16x16.png/ac6aff/ffffff"
                    }
                    width={16}
                    height={16}
                    alt={item.label || "Social Icon"}
                  />
                </Link>
              ))}
            </ul>
          )}
        </Container>
      </Section>
    </footer>
  );
}
