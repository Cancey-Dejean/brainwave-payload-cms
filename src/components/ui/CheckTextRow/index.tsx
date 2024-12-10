import Image from "next/image";
import RichText from "@/blocks/RichText";
import { cn } from "@/lib/utils";
import { CheckTextRowProps } from "@/types";

export default function CheckTextRow({
  text,
  description,
  showBorder,
}: CheckTextRowProps) {
  return (
    <li
      className={cn(
        `${showBorder ? "border-brand-600 border-t py-3" : ""} flex flex-col items-start px-4 py-5`,
      )}
    >
      <div className={cn("flex items-start")}>
        <Image src="/images/check.svg" width={24} height={24} alt="Check" />
        <p className="body-2 ml-4">{text || "Title"}</p>
      </div>

      {description && (
        <RichText
          content={description as any}
          className="body-2 text-brand-150 mt-3"
        />
      )}
    </li>
  );
}
