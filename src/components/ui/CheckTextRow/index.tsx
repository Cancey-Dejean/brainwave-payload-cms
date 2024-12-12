import Image from "next/image";
import RichText from "@/blocks/RichText";
import { cn } from "@/lib/utils";
import { CheckTextRowProps } from "@/types";

export default function CheckTextRow({
  title = "Title",
  description,
  showBorder,
  className,
}: CheckTextRowProps) {
  return (
    <li
      className={cn(
        "flex flex-col items-start px-4 py-5",
        showBorder && "border-brand-600 border-t py-3 last:border-b",
        className,
      )}
    >
      <div className={cn("flex items-start")}>
        <Image src="/images/check.svg" width={24} height={24} alt="Check" />
        <p className="body-2 ml-4 text-white">{title}</p>
      </div>

      {description && (
        <div className="text-brand-50">
          <RichText content={description as any} className="body-2 mt-3" />
        </div>
      )}
    </li>
  );
}
