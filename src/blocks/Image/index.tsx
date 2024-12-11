import { SimpleImage } from "@/types";
import Image from "next/image";

export default function ImageBlock({ image }: { image: SimpleImage }) {
  return (
    <Image
      src={image.url}
      alt={image.alt || ""}
      className="w-full"
      width={image.width}
      height={image.height}
    />
  );
}
