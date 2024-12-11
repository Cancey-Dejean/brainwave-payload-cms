import TagLine from "@/components/Tagline";
import RichText from "@/blocks/RichText";
import { cn } from "@/lib/utils";

export default function Heading({
  className,
  title = "Section Title",
  text,
  tag,
}: {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto mb-12 max-w-[50rem] md:text-center lg:mb-20",
        className,
      )}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}

      {title && <h2 className="h2">{title}</h2>}

      {text && (
        <div className="text-brand-150">
          <RichText content={text as any} className="body-2 mt-4" />
        </div>
      )}
    </div>
  );
}
