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
import { CheckTextRowProps, LinkItem, SimpleImage } from "@/types";
import { cn } from "@/lib/utils";

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
  perks: CheckTextRowProps[];
  circleCenterImage?: SimpleImage;
  circleImages?: {
    icon: SimpleImage;
  }[];
}) {
  const iconContainerStyles =
    "absolute top-0 left-1/2 -ml-[1.6rem] h-1/2 origin-bottom";

  const iconInnerStyles =
    "bg-brand-800 relative -top-[1.6rem] flex items-center justify-center size-[3.2rem] rounded-xl border border-white/15 [&>img]:m-auto [&>img]:h-8 [&>img]:object-contain";

  return (
    <Section className="hidden py-10 md:block lg:py-20 xl:py-40" showCrosses>
      <Container className="md:flex">
        <div className="md:max-w-[25rem]">
          <h2 className="h2 mb-4 text-white md:mb-8">{headline}</h2>

          {perks && (
            <ul className="mb-10 md:mb-14 md:max-w-[22rem]">
              {perks.map((item, index) => (
                <CheckTextRow {...item} key={index} />
              ))}
            </ul>
          )}

          <Button as="a" href={button.url}>
            {button.label}
          </Button>
        </div>

        <div className="mt-10 w-full lg:ml-auto xl:max-w-[38rem]">
          <div className="text-brand-50">
            <RichText
              content={topDescription as any}
              className="body-2 mb-8 md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem]"
            />
          </div>

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

            <ul>
              <li className={cn(iconContainerStyles, "rotate-0")}>
                <div className={cn(iconInnerStyles, "-rotate-0")}>
                  <div className="relative flex size-[34px] items-center justify-center">
                    <Image
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 34px"
                      alt={circleImages?.[0]?.icon?.alt || "App Icon"}
                      src={
                        circleImages?.[0]?.icon?.url ||
                        "/images/collaboration/figma.png"
                      }
                    />
                  </div>
                </div>
              </li>

              <li className={cn(iconContainerStyles, "rotate-45")}>
                <div className={cn(iconInnerStyles, "-rotate-45")}>
                  <div className="relative flex size-[34px] items-center justify-center">
                    <Image
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 34px"
                      alt={circleImages?.[1]?.icon?.alt || "App Icon"}
                      src={
                        circleImages?.[1]?.icon?.url ||
                        "/images/collaboration/figma.png"
                      }
                    />
                  </div>
                </div>
              </li>

              <li className={cn(iconContainerStyles, "rotate-90")}>
                <div className={cn(iconInnerStyles, "-rotate-90")}>
                  <div className="relative flex size-[34px] items-center justify-center">
                    <Image
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 34px"
                      alt={circleImages?.[2]?.icon?.alt || "App Icon"}
                      src={
                        circleImages?.[2]?.icon?.url ||
                        "/images/collaboration/figma.png"
                      }
                    />
                  </div>
                </div>
              </li>

              <li className={cn(iconContainerStyles, "rotate-135")}>
                <div className={cn(iconInnerStyles, "-rotate-135")}>
                  <div className="relative flex size-[34px] items-center justify-center">
                    <Image
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 34px"
                      alt={circleImages?.[3]?.icon?.alt || "App Icon"}
                      src={
                        circleImages?.[3]?.icon?.url ||
                        "/images/collaboration/figma.png"
                      }
                    />
                  </div>
                </div>
              </li>

              <li className={cn(iconContainerStyles, "rotate-180")}>
                <div className={cn(iconInnerStyles, "-rotate-180")}>
                  <div className="relative flex size-[34px] items-center justify-center">
                    <Image
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 34px"
                      alt={circleImages?.[4]?.icon?.alt || "App Icon"}
                      src={
                        circleImages?.[4]?.icon?.url ||
                        "/images/collaboration/figma.png"
                      }
                    />
                  </div>
                </div>
              </li>

              <li className={cn(iconContainerStyles, "rotate-225")}>
                <div className={cn(iconInnerStyles, "-rotate-225")}>
                  <div className="relative flex size-[34px] items-center justify-center">
                    <Image
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 34px"
                      alt={circleImages?.[5]?.icon?.alt || "App Icon"}
                      src={
                        circleImages?.[5]?.icon?.url ||
                        "/images/collaboration/figma.png"
                      }
                    />
                  </div>
                </div>
              </li>

              <li className={cn(iconContainerStyles, "rotate-270")}>
                <div className={cn(iconInnerStyles, "-rotate-270")}>
                  <div className="relative flex size-[34px] items-center justify-center">
                    <Image
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 34px"
                      alt={circleImages?.[6]?.icon?.alt || "App Icon"}
                      src={
                        circleImages?.[6]?.icon?.url ||
                        "/images/collaboration/figma.png"
                      }
                    />
                  </div>
                </div>
              </li>

              <li className={cn(iconContainerStyles, "rotate-315")}>
                <div className={cn(iconInnerStyles, "-rotate-315")}>
                  <div className="relative flex size-[34px] items-center justify-center">
                    <Image
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 34px"
                      alt={circleImages?.[7]?.icon?.alt || "App Icon"}
                      src={
                        circleImages?.[7]?.icon?.url ||
                        "/images/collaboration/figma.png"
                      }
                    />
                  </div>
                </div>
              </li>
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </Container>
    </Section>
  );
}
