import React from "react";
// import { Arrow, ClipPath } from "../svg";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GradientLight } from "@/blocks/Features/_components/GradientLight";
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

        <div className="mt-auto flex items-center gap-6">
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
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10">
            <Image
              src={
                backgroundImage?.url ||
                "https:dummyimage.com/760x724.png/ac6aff/ffffff"
              }
              width={380}
              height={362}
              alt={backgroundImage?.alt || ""}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      <ClipPath />
    </div>

    // <div
    //   className={cn(
    //     "group relative bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-[24rem]",
    //     variant === "v1" && "bg-[url('/images/benefits/card-1.svg')]",
    //     variant === "v2" && "bg-[url('/images/benefits/card-2.svg')]",
    //     variant === "v3" && "bg-[url('/images/benefits/card-3.svg')]",
    //     variant === "v4" && "bg-[url('/images/benefits/card-4.svg')]",
    //     variant === "v5" && "bg-[url('/images/benefits/card-5.svg')]",
    //     variant === "v6" && "bg-[url('/images/benefits/card-6.svg')]",
    //   )}
    // >
    //   <div className="relative z-1 flex min-h-[22rem] flex-col p-[2.4rem]">
    //     <h5 className="h5 mb-5 text-white">{title || "Section Title"}</h5>
    //     {description && <p className="body-2 text-n-3 mb-6">{description}</p>}

    //     <div className="mt-auto flex items-center gap-6">
    //       <Image
    //         src={icon?.url || "https://dummyimage.com/48x48.png/ac6aff/ffffff"}
    //         className="rounded-lg"
    //         width={48}
    //         height={48}
    //         alt={icon?.alt || "Alt Text"}
    //       />

    //       <div className="flex items-center">
    //         <p className="font-code text-n-1 ml-auto text-xs font-bold tracking-wider uppercase">
    //           {btnText || "Explore more"}
    //         </p>

    //         {btnUrl !== "" ? (
    //           <Link
    //             href={btnUrl || "#"}
    //             className="after:absolute after:inset-0"
    //           >
    //             <Arrow />
    //           </Link>
    //         ) : (
    //           <Arrow />
    //         )}
    //       </div>
    //     </div>
    //   </div>

    //   {gradientLight && <GradientLight />}

    //   <div
    //     className="bg-n-8 absolute inset-0.5"
    //     style={{ clipPath: "url(#benefits)" }}
    //   >
    //     <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10">
    //       <Image
    //         src={
    //           backgroundImage?.url ||
    //           "https://dummyimage.com/760x724.png/ac6aff/ffffff"
    //         }
    //         width={380}
    //         height={362}
    //         alt={backgroundImage?.alt || ""}
    //         className="h-full w-full object-cover"
    //       />
    //     </div>
    //   </div>

    //   <ClipPath />
    // </div>
  );
}
