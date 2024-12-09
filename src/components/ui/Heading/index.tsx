import TagLine from "@/components/Tagline";
import { cn } from "@/lib/utils";

export default function Heading({
  className,
  title,
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
      {text && <p className="body-2 text-n-4 mt-4">{text}</p>}
    </div>
  );
}
