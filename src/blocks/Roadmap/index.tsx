import Section from "@/components/Section";
import Heading from "@/components/ui/Heading";
import { LinkItem, RoadmapCardProps } from "@/types";
import { Gradient } from "./_components/designs";
import RoadmapCard from "./_components/RoadmapCard";
import { Button } from "@/components/ui/Button";
import Container from "@/components/Container";

export default function Roadmap({
  bracketText,
  headline,
  button,
  cards,
}: {
  bracketText?: string;
  headline?: string;
  button: LinkItem;
  cards?: RoadmapCardProps[];
}) {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <Container className="md:pb-10">
        <div className="text-white">
          <Heading tag={bracketText} title={headline} />
        </div>

        {cards && (
          <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
            {cards.map((card, index) => {
              return <RoadmapCard key={index} {...card} />;
            })}

            <Gradient />
          </div>
        )}

        {button.label && (
          <div className="mt-12 flex justify-center md:mt-15 xl:mt-20">
            <Button as="a" href={button.url}>
              {button.label}
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
