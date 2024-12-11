import { CheckTextRowProps, SimpleImage } from "@/types";
import ServiceCardLarge, {
  ServiceCardLargeProps,
} from "./_components/ServiceCardLarge";
import ServiceCard1 from "./_components/ServiceCard1";
import ServiceCard2 from "./_components/ServiceCard2";
import Section from "@/components/Section";
import Heading from "@/components/ui/Heading";
import CheckTextRow from "@/components/ui/CheckTextRow";
import { Gradient } from "./_components/designs";
import Container from "@/components/Container";

export default function Services({
  headline,
  description,
  featuredCard,
  cardOne,
  cardTwo,
}: {
  headline: string;
  description?: string;
  featuredCard: ServiceCardLargeProps;
  cardOne: {
    cardOneTitle: string;
    cardOneDescription: string;
    cardOneImage: SimpleImage;
    chatMessage?: string;
  };
  cardTwo: {
    cardTwoTitle?: string;
    cardTwoDescription?: string;
    cardTwoImage?: SimpleImage;
    chatMessage?: string;
  };
}) {
  return (
    <Section id="how-to-use" className="py-16 md:py-20">
      <Container className="text-white">
        <Heading title={headline} text={description} />

        <div className="relative">
          {featuredCard && (
            <ServiceCardLarge
              title={featuredCard.title || "Featured"}
              description={featuredCard.description || "Hello"}
              image={featuredCard.image}
              bottomText={featuredCard.bottomText}
            >
              {featuredCard?.itemList?.map((item, index) => (
                <CheckTextRow className="px-0" key={index} {...item} />
              ))}
            </ServiceCardLarge>
          )}

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <ServiceCard1
              title={cardOne.cardOneTitle}
              description={cardOne.cardOneDescription}
              image={cardOne.cardOneImage}
              chatMessage={cardOne.chatMessage}
            />

            {/* ServiceCard2 */}
            <ServiceCard2
              title={cardTwo.cardTwoTitle}
              description={cardTwo.cardTwoDescription}
              image={cardTwo.cardTwoImage}
              chatMessage={cardTwo.chatMessage}
            />
          </div>

          <Gradient />
        </div>
      </Container>
    </Section>
  );
}
