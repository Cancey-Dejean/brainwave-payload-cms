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
import { LinkItem, SimpleImage } from "@/types";
import { cn } from "@/lib/utils";

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
  headline = "Section Title",
  topDescription,
  button,
  circleCenterImage,
  perks,
  circleImages,
}: {
  headline?: string;
  topDescription: string;
  button: LinkItem;
  perks: CheckItem[];
  circleCenterImage?: SimpleImage;
  circleImages?: SimpleImage[];
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
                    src={
                      circleCenterImage?.url || "/images/brainwave-symbol.svg"
                    }
                    width={48}
                    height={48}
                    alt={circleCenterImage?.alt || "brainwave"}
                  />
                </div>
              </div>
            </div>

            {circleImages && (
              <ul>
                {circleImages.map((icon, index) => (
                  <div key={index}>
                    {icon.alt}
                    {/* <Image
                      className="m-auto max-w-[24px]"
                      width={image.width || 34}
                      height={image.height || 34}
                      alt={image.alt || "App Icon"}
                      src={image.url}
                    /> */}
                  </div>
                  // <li
                  //   key={index}
                  //   className={`absolute top-0 left-1/2 -ml-[1.6rem] h-1/2 origin-bottom !rotate-x-${
                  //     index * 45
                  //   }`}
                  // >
                  //   <div
                  //     className={`bg-brand-800 relative -top-[1.6rem] flex h-[3.2rem] w-[3.2rem] rounded-xl border border-white/15 rotate-x-${
                  //       index * 45
                  //     }`}
                  //   >
                  //     <Image
                  //       className="m-auto max-w-[24px]"
                  //       width={image.width || 34}
                  //       height={image.height || 34}
                  //       alt={image.alt || "App Icon"}
                  //       src={image.url || "/images/collaboration/figma.png"}
                  //     />
                  //   </div>
                  // </li>
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
