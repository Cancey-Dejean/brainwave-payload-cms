import Section from "@/components/Section";
import { Button } from "@/components/ui/Button";
import CheckTextRow from "@/components/ui/CheckTextRow";
import Image from "next/image";
import {
  LeftCurve,
  RightCurve,
} from "@/blocks/Collaboration/_components/designs";
import RichText from "@/blocks/RichText";
import Container from "@/components/Container";
import { LinkItem } from "@/types";

type CheckItem = {
  id?: string;
  text?: string;
  description?: string;
};

export type IconItem = {
  id?: string;
  icon?: string | null;
  width?: number;
  height?: number;
  alt?: string;
};

export default function Collaboration({
  topDescription,
  headline = "Section Title",
  button,
  centerImage,
  perks,
  collabApps,
}: {
  headline?: string;
  topDescription: string;
  button: LinkItem;
  centerImage?: string;
  perks: CheckItem[];
  collabApps: IconItem[];
}) {
  return (
    <Section>
      <Container className="lg:flex">
        <div className="max-w-[25rem] text-white">
          <h2 className="h2 mb-4 md:mb-8">{headline}</h2>

          {perks && (
            <ul className="mb-10 max-w-[22rem] md:mb-14">
              {perks.map((item) => (
                <CheckTextRow {...item} key={item.id} />
              ))}
            </ul>
          )}

          <Button as="a" href={button.url}>
            {button.label}
          </Button>
        </div>

        <div className="mt-4 lg:ml-auto xl:w-[38rem]">
          <RichText
            content={topDescription as any}
            className="body-2 text-brand-150 mb-8 md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem]"
          />

          <div className="scale:75 border-brand-600 relative left-1/2 flex aspect-square w-[22rem] -translate-x-1/2 rounded-full border md:scale-100">
            <div className="border-brand-600 m-auto flex aspect-square w-60 rounded-full border">
              <div className="conic-gradient m-auto aspect-square w-[6rem] rounded-full bg-conic/[background-image: p-[0.2rem]">
                <div className="bg-brand-900 flex h-full w-full items-center justify-center rounded-full">
                  <Image
                    src={centerImage || "/images/brainwave-symbol.svg"}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            {collabApps && (
              <ul>
                {collabApps.map((app, index) => (
                  <li
                    key={index}
                    className={`absolute top-0 left-1/2 -ml-[1.6rem] h-1/2 origin-bottom rotate-${
                      index * 45
                    }`}
                  >
                    <div
                      className={`bg-brand-800 relative -top-[1.6rem] flex h-[3.2rem] w-[3.2rem] rounded-xl border border-white/15 -rotate-${
                        index * 45
                      }`}
                    >
                      <Image
                        className="m-auto"
                        width={app.width || 34}
                        height={app.height || 34}
                        alt={app.alt || "App Icon"}
                        src={app.icon || "/images/collaboration/figma.png"}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </Container>
    </Section>
  );
}
