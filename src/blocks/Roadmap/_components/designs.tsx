import Image from "next/image";

export const Gradient = () => {
  return (
    <div className="pointer-events-none absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge">
      <div className="absolute top-1/2 left-1/2 h-[58.85rem] w-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <div className="relative size-[942px]">
          <Image
            className="object-contain"
            src="/images/gradient.png"
            fill
            alt="Gradient"
            sizes="(max-width: 768px) 100vw, 942px"
          />
        </div>
      </div>
    </div>
  );
};
