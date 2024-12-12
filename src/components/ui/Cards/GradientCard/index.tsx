import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GradientLight } from "@/blocks/Features/_components/designs";
import { Arrow, ClipPath } from "@/components/icons";
import { SimpleImage } from "@/types";
import RichText from "@/blocks/RichText";

export type GradientCardProps = {
  id?: string;
  title?: string;
  description?: string;
  icon?: SimpleImage;
  variant?: "v1" | "v2" | "v3" | "v4" | "v5" | "v6";
  backgroundImage?: SimpleImage;
  gradientLight?: boolean;
  btnText?: string;
  btnUrl?: string;
  className?: string;
};

export default function GradientCard({
  id,
  title = "Section Title",
  description = "Lorem ipsum dolor sit amet consectetur. Amet consectetur adipiscing elit sed egestas. Amet consectetur adipiscing elit sed egestas.",
  icon,
  backgroundImage,
  variant = "v1",
  gradientLight = false,
  btnText = "Read more",
  btnUrl,
  className,
  ...props
}: GradientCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-[24rem]",
        variant === "v1" && "bg-[url('/images/benefits/card-1.svg')]",
        variant === "v2" && "bg-[url('/images/benefits/card-2.svg')]",
        variant === "v3" && "bg-[url('/images/benefits/card-3.svg')]",
        variant === "v4" && "bg-[url('/images/benefits/card-4.svg')]",
        variant === "v5" && "bg-[url('/images/benefits/card-5.svg')]",
        variant === "v6" && "bg-[url('/images/benefits/card-6.svg')]",
        className,
      )}
      {...props}
    >
      <div className="relative z-1 flex min-h-[22rem] flex-col p-[2.4rem]">
        <h5 className="h5 mb-5 text-white">{title}</h5>

        {description && (
          <RichText
            content={description as any}
            className="body-2 text-brand-100 mb-6"
          />
        )}

        <div className="mt-auto flex items-center justify-between gap-6">
          <Image
            src={icon?.url || "https://dummyimage.com/48x48.png/ac6aff/ffffff"}
            className="rounded-lg"
            width={48}
            height={48}
            alt={icon?.alt || "Alt Text"}
          />

          <div className="flex items-center">
            <p className="font-code ml-auto text-xs font-bold tracking-wider text-white uppercase">
              {btnText}
            </p>

            {btnUrl !== "" ? (
              <Link
                href={btnUrl || "#"}
                className="after:absolute after:inset-0"
              >
                <Arrow />
              </Link>
            ) : (
              <Arrow />
            )}
          </div>
        </div>
      </div>

      {gradientLight && <GradientLight />}

      {backgroundImage && (
        <div
          className="bg-brand-900 absolute inset-0.5"
          style={{ clipPath: "url(#benefits)" }}
        >
          <div className="absolute inset-0 opacity-5 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-10">
            <div className="relative h-full w-[380px]">
              <Image
                src={
                  backgroundImage?.url ||
                  "https:dummyimage.com/760x724.png/ac6aff/ffffff"
                }
                fill
                alt={backgroundImage?.alt || ""}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
      )}

      <ClipPath />
    </div>
  );
}
