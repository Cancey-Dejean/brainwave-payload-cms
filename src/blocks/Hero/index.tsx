// import { Button } from "@/components/ui/Button";
// import Container from "@/components/ui/container";
// import SectionTitle from "@/components/ui/SectionTitle";

"use client";

import { Button } from "@/components/ui/Button";
import Section from "@/components/Section";
import Image from "next/image";
import { useRef } from "react";
import Generating from "@/components/Generating";
import { ScrollParallax } from "react-just-parallax";
import Notification from "@/components/Notification";

import CompanyLogos from "@/components/CompanyLogos";
import Container from "@/components/Container";

import {
  BackgroundCircles,
  BottomLine,
} from "@/blocks/Hero/_components/designs";
import { LinkItem, SimpleImage } from "@/types";
import { heroIcons, notificationImages } from "@/constants";

export default function Hero({
  headline = "Headline",
  headlineHighlight,
  image,
  imageText,
  description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, dolore.",
  button,
  socialProof,
}: {
  headline: string;
  headlineHighlight?: string;
  image?: SimpleImage;
  imageText?: string;
  description?: string;
  button: LinkItem;
  socialProofText?: string;
  socialProof?: {
    title: string;
    logos: {
      id: string;
      logo: SimpleImage;
    }[];
  };
} & React.HTMLAttributes<HTMLDivElement>) {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="-mt-40 py-32 !pb-0"
      crossesOffset="lg:translate-y-[4.75rem] overflow-x-hidden"
      id="hero"
    >
      <Container className="relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 text-white">
            {headline}

            {headlineHighlight && (
              <span className="relative ml-4 inline-block">
                {headlineHighlight || "Highlight"}
                <Image
                  src="/images/hero/curve.png"
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            )}
          </h1>

          <p className="body-1 text-brand-50 mx-auto max-w-3xl">
            {description}
          </p>

          <Button as="a" href={button.url} white className="mt-6 lg:mt-8">
            {button.label}
          </Button>
        </div>

        <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
          <div className="bg-conic-gradient relative z-1 rounded-2xl p-0.5">
            <div className="bg-brand-900 relative rounded-[1rem]">
              <div className="bg-brand-200 h-[1.4rem] rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src={
                    image?.url ||
                    "https://dummyimage.com/1034x1512.png/ac6aff/ffffff"
                  }
                  className="h-full w-full object-cover md:scale-[1.1]"
                  width={1034}
                  height={1512}
                  alt={image?.alt || "Main Image"}
                  priority
                />

                {imageText && (
                  <Generating
                    text={imageText || "Text goes here"}
                    className="absolute right-4 bottom-5 left-4 text-white md:right-auto md:bottom-8 md:left-1/2 md:w-[31rem] md:-translate-x-1/2"
                  />
                )}

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="bg-brand-300/40 absolute bottom-[7.5rem] -left-[5.5rem] hidden rounded-2xl border border-white/10 px-1 py-1 text-white backdrop-blur xl:flex">
                    {Object.values(heroIcons).map((Icon, index) => (
                      <li className="p-5" key={index}>
                        <Icon />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    notificationImages={notificationImages}
                    className="absolute -right-[5.5rem] bottom-[11rem] hidden w-[18rem] text-white xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-full lg:-top-[104%]">
            <Image
              src={"/images/hero/hero-background.jpg"}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>

        {socialProof && socialProof.logos.length > 0 && (
          <CompanyLogos
            text={socialProof.title}
            className="relative z-10 mt-20 hidden text-white lg:block"
          >
            {socialProof.logos.map(({ id, logo }) => (
              <li
                className="flex h-[8.5rem] flex-1 items-center justify-center"
                key={id}
              >
                <>
                  <span className="sr-only">{logo.alt}</span>
                  <Image
                    src={
                      logo.url ||
                      "https://dummyimage.com/134x28.png/ac6aff/ffffff"
                    }
                    width={134}
                    height={28}
                    alt={logo.alt || "Company Logo"}
                    priority
                  />
                </>
              </li>
            ))}
          </CompanyLogos>
        )}
      </Container>

      <BottomLine />
    </Section>
  );
}

export const Gradient = () => {
  return (
    <>
      <div className="bg-brand-700 relative z-1 mx-2.5 h-6 rounded-b-[1.25rem] shadow-xl lg:mx-8 lg:h-6" />
      <div className="bg-brand-700/70 relative z-1 mx-6 h-6 rounded-b-[1.25rem] shadow-xl lg:mx-20 lg:h-6" />
    </>
  );
};
