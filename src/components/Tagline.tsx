import { brackets } from "@/components/icons";

type TaglineProps = {
  className?: string;
  children: React.ReactNode;
};

const TagLine = ({ className, children }: TaglineProps) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="text-n-3 mx-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
