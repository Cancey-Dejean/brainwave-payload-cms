import Image from "next/image";
import { VideoBar, VideoChatMessage } from "../designs";
import { ServiceCard } from "@/types";

export const brainwaveServicesIcons = [
  {
    id: "0",
    icon: "/images/recording-03.svg",
    alt: "Recording 03",
  },
  {
    id: "1",
    icon: "/images/recording-01.svg",
    alt: "Recording 01",
  },
  {
    id: "2",
    icon: "/images/disc-02.svg",
    alt: "Disc 02",
  },
  {
    id: "3",
    icon: "/images/chrome-cast.svg",
    alt: "chromecast",
  },
  {
    id: "4",
    icon: "/images/sliders-04.svg",
    alt: "Sliders 04",
  },
];

export default function ServiceCard2({
  image,
  title,
  description,
  chatMessage,
}: ServiceCard) {
  return (
    <div className="bg-brand-800 mx-auto w-full max-w-[628px] overflow-hidden rounded-3xl p-4 lg:min-h-[46rem]">
      <div className="px-4 py-12 xl:px-8">
        <h4 className="h4 mb-4">{title || "Section Title"}</h4>
        <p className="body-2 text-brand-100 mb-[2rem]">
          {description || "This is a description"}
        </p>

        <ul className="flex items-center justify-between gap-4">
          {brainwaveServicesIcons.map((item, index) => (
            <li
              key={index}
              className={`flex items-center justify-center rounded-2xl ${
                index === 2
                  ? "conic-gradient size-[3rem] p-0.25 md:size-[4.5rem]"
                  : "bg-brand-600 flex size-10 md:h-15 md:w-15"
              }`}
            >
              <div
                className={
                  index === 2
                    ? "bg-brand-800 flex h-full w-full items-center justify-center rounded-[1rem]"
                    : ""
                }
              >
                <Image src={item.icon} width={24} height={24} alt={item.alt} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-brand-900 relative h-[20rem] overflow-hidden rounded-xl md:h-[25rem]">
        <Image
          src={image?.url || "https://dummyimage.com/520x400.png/ac6aff/ffffff"}
          className="h-full w-full object-cover"
          width={520}
          height={400}
          alt={image?.alt || "Alt text"}
        />

        {chatMessage && <VideoChatMessage text={chatMessage} />}
        <VideoBar />
      </div>
    </div>
  );
}
