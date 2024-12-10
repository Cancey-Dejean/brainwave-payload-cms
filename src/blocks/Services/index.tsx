import { CheckTextRowProps } from "@/types";
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
  featuredCardTitle,
  featuredCardDesc,
  featuredCardItemList,
  featuredCardImage,
  serviceCard1Image,
  serviceCard1Title,
  serviceCard1Desc,
  serviceCard1ChatMessage,
  serviceCard2Image,
  serviceCard2Title,
  serviceCard2Desc,
  serviceCard2ChatMessage,
}: {
  headline: string;
  description?: string;

  featuredCardImage?: string;
  featuredCardTitle?: string;
  featuredCardDesc?: string;
  featuredCardItemList?: CheckTextRowProps[];
  serviceCard1Image?: string;
  serviceCard1Title?: string;
  serviceCard1Desc?: string;
  serviceCard1ChatMessage?: string;
  serviceCard2Image?: string;
  serviceCard2Title?: string;
  serviceCard2Desc?: string;
  serviceCard2ChatMessage?: string;
} & ServiceCardLargeProps) {
  return (
    <Section id="how-to-use">
      <Container className="text-white">
        <Heading title={headline} text={description} />

        <div className="relative">
          {/* ServiceCardLarge */}
          {featuredCardItemList && (
            <>
              <ServiceCardLarge
                title={featuredCardTitle || "Featured"}
                description={featuredCardDesc || "Hello"}
                mainImage={featuredCardImage || ""}
              >
                {featuredCardItemList.map((item, index) => (
                  <CheckTextRow key={index} {...item} />
                ))}
              </ServiceCardLarge>
            </>
          )}

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* ServiceCard1 */}
            <ServiceCard1
              title={serviceCard1Title}
              chatMessage={serviceCard1ChatMessage}
              description={serviceCard1Desc}
              mainImage={serviceCard1Image}
              mainImageAlt="Main Image"
            />

            {/* ServiceCard2 */}
            <ServiceCard2
              mainImage={serviceCard2Image}
              mainImageAlt="Hello"
              title={serviceCard2Title}
              description={serviceCard2Desc}
              videoChatMessage={serviceCard2ChatMessage}
            />
          </div>

          <Gradient />
        </div>
      </Container>
    </Section>
  );
}
