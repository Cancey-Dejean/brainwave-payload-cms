import Image from "next/image";
import { ChatBubbleWing } from "@/components/icons";

export const Gradient = () => {
  return (
    <div className="pointer-events-none absolute top-0 -left-[10rem] h-[56.625rem] w-[56.625rem] opacity-50 mix-blend-color-dodge">
      <Image
        className="absolute top-1/2 left-1/2 h-[88.5625rem] w-[79.5625rem] max-w-[79.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={"/images/gradient.png"}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = ({ text }: { text: string }) => {
  return (
    <div className="font-code absolute top-8 right-8 max-w-[17.5rem] rounded-t-xl rounded-bl-xl bg-black px-8 py-6 text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
      {text || "Photo generated!"}
      <ChatBubbleWing className="absolute bottom-0 left-full" />
    </div>
  );
};

export const VideoChatMessage = ({ text }: { text: string }) => {
  return (
    <div className="bg-brand-600 font-code absolute top-8 left-[3.125rem] w-full max-w-[14rem] rounded-t-xl rounded-br-xl pt-2.5 pr-5 pb-7 pl-5 text-base md:max-w-[17.5rem]">
      {text || "Text"}
      <div className="bg-primary absolute -bottom-[1.125rem] left-5 flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-[0.75rem]">
        <Image
          src={"/images/brainwave-symbol-white.svg"}
          width={26}
          height={26}
          alt="Brainwave"
        />
      </div>
      <p className="tagline text-brand-100 absolute right-3 bottom-2 text-[0.625rem] uppercase">
        just now
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-brand-600"
      />
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div className="absolute bottom-0 left-0 flex w-full items-center p-6">
      <Image
        src={"/images/play.svg"}
        width={24}
        height={24}
        alt="Play"
        className="mr-3 object-contain"
      />

      <div className="flex-1 bg-[#D9D9D9]">
        <div className="bg-color-1 h-0.5 w-1/2"></div>
      </div>
    </div>
  );
};
