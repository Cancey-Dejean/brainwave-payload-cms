import { serializeLexical } from "@/utils/serialize";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  content: Record<string, any>;
};

const RichText: React.FC<Props> = ({ content, className }) => {
  if (!content) {
    return null;
  }

  return (
    <div className={cn("prose max-w-full", className)}>
      {serializeLexical({ nodes: content.root.children })}
    </div>
  );
};

export default RichText;
