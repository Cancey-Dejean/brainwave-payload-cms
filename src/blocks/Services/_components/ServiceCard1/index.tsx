import Image from "next/image";
import { PhotoChatMessage } from "../designs";

type ServiceCard1Props = {
  mainImage?: string;
  mainImageAlt?: string;
  title?: string;
  description?: string;
  chatMessage?: string;
};

export default function ServiceCard1({
  mainImage,
  mainImageAlt,
  title,
  description,
  chatMessage,
}: ServiceCard1Props) {
  return (
    <div className="border-n-1/10 relative mx-auto min-h-[39rem] w-full max-w-[630px] overflow-hidden rounded-3xl border">
      <Image
        src={mainImage || "https://dummyimage.com/630x750.png/ac6aff/ffffff"}
        className="h-full w-full object-cover"
        width={630}
        height={750}
        alt={mainImageAlt || "Image"}
      />

      <div className="from-n-8/0 to-n-8/90 absolute inset-0 flex flex-col justify-end bg-gradient-to-b p-8 lg:p-15">
        <h3 className="h4 mb-4">{title || "Section Title"}</h3>

        <p className="body-2 text-n-3 mb-[3rem]">
          {description ||
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, rerum!"}
        </p>
      </div>

      {chatMessage && <PhotoChatMessage text={chatMessage} />}
    </div>
  );
}
