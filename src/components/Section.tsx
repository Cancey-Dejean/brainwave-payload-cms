import { cn } from "@/lib/utils";
import { SectionSvg } from "./icons";

type SectionProps = {
  className?: string;
  id?: string;
  crossesOffset?: string;
  children: React.ReactNode;
};
const Section = ({ className, id, crossesOffset, children }: SectionProps) => {
  return (
    <section id={id} className={cn("relative py-32 md:py-48", className)}>
      {children}

      <div className="bg-stroke pointer-events-none absolute top-0 left-5 hidden h-full w-0.25 md:block lg:left-7.5 xl:left-10" />
      <div className="bg-stroke pointer-events-none absolute top-0 right-5 hidden h-full w-0.25 md:block lg:right-7.5 xl:right-10" />

      <div
        className={`bg-stroke absolute top-0 right-7.5 left-7.5 hidden h-0.25 ${
          crossesOffset && crossesOffset
        } pointer-events-none right-10 lg:block xl:left-10`}
      />
      <SectionSvg crossesOffset={crossesOffset as any} />
    </section>
  );
};

export default Section;
