import Image from "next/image";
import TagLine from "@/components/Tagline";
import { cn } from "@/lib/utils";
import { RoadmapCardProps } from "@/types";
import RichText from "@/blocks/RichText";

export default function RoadmapCard({
  colorful,
  date = `Aug ${new Date().getFullYear()}`,
  image,
  title,
  description = "Description goes here",
  status,
}: RoadmapCardProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[630px] rounded-[2.5rem] p-0.25 md:flex even:md:translate-y-[7rem]",
        colorful ? "conic-gradient" : "bg-brand-600",
      )}
    >
      <div className="bg-brand-900 relative overflow-hidden rounded-[2.4375rem] p-8 xl:p-15">
        <div className="absolute top-0 left-0 max-w-full">
          <Image
            className="w-full"
            src="/images/grid.png"
            width={550}
            height={550}
            alt="Grid"
          />
        </div>

        <div className="relative z-1">
          <div className="mb-8 flex max-w-[27rem] items-center justify-between md:mb-20">
            <TagLine>{date}</TagLine>

            <div className="text-brand-900 flex items-center rounded bg-white px-4 py-1">
              <div className="relative size-4">
                <Image
                  className="mr-2.5 object-contain"
                  src={
                    status === "done"
                      ? "/images/check-02.svg"
                      : "/images/loading-01.svg"
                  }
                  fill
                  sizes="16px"
                  alt={`${status}` + " icon"}
                />
              </div>
              <div className="tagline">{status}</div>
            </div>
          </div>

          <div className="-mx-15 -my-10 mb-10">
            <Image
              className="w-full"
              src={
                image?.url || "https://dummyimage.com/628x426.png/ac6aff/ffffff"
              }
              width={628}
              height={426}
              alt={image?.alt || "Image"}
            />
          </div>
          <h4 className="h4 mb-4 text-white">{title || "Title"}</h4>

          <div className="text-brand-150">
            <RichText content={description as any} className="body-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
