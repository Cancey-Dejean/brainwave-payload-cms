import Section from "@/components/Section";
import Heading from "@/components/ui/Heading";
import { LinkItem, PricingCardProps, SimpleImage } from "@/types";
import Image from "next/image";
import PricingCard from "./_components/PricingCard";
import CheckTextRow from "@/components/ui/CheckTextRow";
import { LeftLine, RightLine } from "./_components/designs";
import Link from "next/link";
import Container from "@/components/Container";

export default function Pricing({
  topImage,
  bracketText,
  headline,
  plans,
  linkText,
}: {
  topImage?: SimpleImage;
  bracketText?: string;
  headline?: string;
  linkText: LinkItem;
  plans: PricingCardProps[];
}) {
  // console.log(layout[4]);
  return (
    <Section className="overflow-hidden" id="pricing">
      <Container className="relative z-2">
        <div className="relative mb-[6.5rem] hidden justify-center lg:flex">
          <Image
            src={
              topImage?.url ||
              "https://dummyimage.com/255x255.png/ac6aff/ffffff"
            }
            className="relative z-1"
            width={255}
            height={255}
            alt={topImage?.alt || "Pricing Top Image"}
          />
          <div className="pointer-events-none absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/pricing/stars.svg"
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <div className="text-white">
          <Heading tag={bracketText} title={headline} />
        </div>

        {plans && (
          <div className="relative">
            <div className="flex gap-[1rem] max-lg:flex-wrap">
              {plans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>

            <LeftLine />
            <RightLine />
          </div>
        )}

        {linkText.label && (
          <div className="mt-10 flex justify-center text-white">
            <Link
              className="font-code border-b text-xs font-bold tracking-wider uppercase"
              href={linkText.url || "#"}
            >
              {linkText.label || "Link Text"}
            </Link>
          </div>
        )}
      </Container>
    </Section>
  );
}
