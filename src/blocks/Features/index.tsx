import Container from "@/components/Container";
import Section from "@/components/Section";
import GradientCard, {
  GradientCardProps,
} from "@/components/ui/Cards/GradientCard";
import Heading from "@/components/ui/Heading";

export default function Features({
  headline,
  cards,
}: {
  headline?: string;
  cards?: GradientCardProps[];
}) {
  return (
    <Section id="features" className="!pt-20 !pb-30">
      <Container className="relative z-2">
        <Heading
          className="text-white md:max-w-md lg:max-w-2xl"
          title={headline}
        />

        {cards && (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <GradientCard
                className="text-brand-100"
                key={card.id}
                {...card}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
