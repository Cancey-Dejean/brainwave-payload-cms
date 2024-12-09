import Hero from "@/blocks/Hero";
import Features from "@/blocks/Features";

export const RenderBlocks = (section: any) => {
  const { blockType, id, ...rest } = section;

  switch (blockType) {
    case "hero":
      return <Hero {...rest} key={id} />;
    case "features":
      return <Features {...rest} key={id} />;
  }
};
