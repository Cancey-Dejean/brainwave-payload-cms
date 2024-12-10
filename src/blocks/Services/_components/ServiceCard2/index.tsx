import Image from "next/image";
import { VideoBar, VideoChatMessage } from "../designs";

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

type ServiceCard1Props = {
  mainImage?: string;
  mainImageAlt?: string;
  title?: string;
  description?: string;
  videoChatMessage?: string;
};

export default function ServiceCard2({
  mainImage,
  mainImageAlt,
  title,
  description,
  videoChatMessage,
}: ServiceCard1Props) {
  return (
    <div className="bg-n-7 mx-auto w-full max-w-[628px] overflow-hidden rounded-3xl p-4 lg:min-h-[46rem]">
      <div className="px-4 py-12 xl:px-8">
        <h4 className="h4 mb-4">{title || "Section Title"}</h4>
        <p className="body-2 text-n-3 mb-[2rem]">
          {description || "This is a description"}
        </p>

        <ul className="flex items-center justify-between gap-4">
          {brainwaveServicesIcons.map((item, index) => (
            <li
              key={index}
              className={`flex items-center justify-center rounded-2xl ${
                index === 2
                  ? "bg-conic-gradient h-[3rem] w-[3rem] p-0.25 md:h-[4.5rem] md:w-[4.5rem]"
                  : "bg-n-6 flex h-10 w-10 md:h-15 md:w-15"
              }`}
            >
              <div
                className={
                  index === 2
                    ? "bg-n-7 flex h-full w-full items-center justify-center rounded-[1rem]"
                    : ""
                }
              >
                <Image src={item.icon} width={24} height={24} alt={item.alt} />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-n-8 relative h-[20rem] overflow-hidden rounded-xl md:h-[25rem]">
        <Image
          src={mainImage || "https://dummyimage.com/520x400.png/ac6aff/ffffff"}
          className="h-full w-full object-cover"
          width={520}
          height={400}
          alt={mainImageAlt || "Alt text"}
        />

        {videoChatMessage && <VideoChatMessage text={videoChatMessage} />}
        <VideoBar />
      </div>
    </div>
  );
}
