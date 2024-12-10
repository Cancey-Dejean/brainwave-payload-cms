import RichText from "@/blocks/RichText";
import Generating from "@/components/Generating";
import { CheckTextRowProps, SimpleImage } from "@/types";
import Image from "next/image";

export type ServiceCardLargeProps = {
  image?: SimpleImage;
  title?: string;
  description?: string;
  bottomText?: string;
  itemList?: CheckTextRowProps[];
  children?: React.ReactNode;
};

export default function ServiceCardLarge({
  image,
  title,
  description,
  bottomText,
  children,
}: ServiceCardLargeProps) {
  return (
    <div className="relative z-1 mx-auto mb-5 flex h-[39rem] w-full max-w-[1280px] items-center overflow-hidden rounded-3xl border border-white/10 p-8 lg:p-20 xl:h-[46rem]">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full md:w-3/5 xl:w-auto">
        <Image
          className="h-full w-full object-cover md:object-right"
          width={800}
          alt={image?.alt || "Alt Text"}
          height={730}
          src={image?.url || "https://dummyimage.com/800x730.png/ac6aff/ffffff"}
        />
      </div>

      <div className="relative z-1 ml-auto max-w-[17rem]">
        <h4 className="h4 mb-4">{title || "Title"}</h4>

        {description && (
          <p className="body-2 text-brand-100 mb-[3rem]">
            {description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia quo non."}
          </p>
        )}

        <ul className="body-2">{children}</ul>
      </div>

      {bottomText && (
        <Generating
          text={bottomText}
          className="lg-right-auto absolute right-4 bottom-4 left-4 border border-white/10 lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2"
        />
      )}
    </div>
  );
}
