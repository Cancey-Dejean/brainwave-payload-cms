import Hero from "@/blocks/Hero";
import Features from "@/blocks/Features";
import Collaboration from "@/blocks/Collaboration";
import Services from "@/blocks/Services";

export const RenderBlocks = (section: any) => {
  const { blockType, id, ...rest } = section;

  switch (blockType) {
    case "hero":
      return <Hero {...rest} key={id} />;
    case "features":
      return <Features {...rest} key={id} />;
    case "collaboration":
      return <Collaboration {...rest} key={id} />;
    case "services":
      return <Services {...rest} key={id} />;
  }
};
