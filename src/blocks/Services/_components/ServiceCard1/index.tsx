import Image from "next/image";
import { PhotoChatMessage } from "../designs";
import { ServiceCard } from "@/types";

export default function ServiceCard1({
  image,
  title = "Title",
  description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, rerum!",
  chatMessage,
}: ServiceCard) {
  return (
    <div className="relative mx-auto min-h-[39rem] w-full max-w-[630px] overflow-hidden rounded-3xl border border-white/10">
      <Image
        src={image?.url || "https://dummyimage.com/630x750.png/ac6aff/ffffff"}
        className="h-full w-full object-cover"
        width={630}
        height={750}
        alt={image?.alt || "Dummy Image"}
      />

      <div className="from-brand-900/0 to-brand-900/90 absolute inset-0 flex flex-col justify-end bg-gradient-to-b p-8 lg:p-15">
        <h3 className="h4 mb-4">{title}</h3>

        <p className="body-2 text-brand-100 mb-[3rem]">{description}</p>
      </div>

      {chatMessage && <PhotoChatMessage text={chatMessage} />}
    </div>
  );
}
