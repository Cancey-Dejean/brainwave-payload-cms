import Image from "next/image";

type GeneratingProps = {
  className?: string;
  text: string;
};

const Generating = ({ className, text }: GeneratingProps) => {
  return (
    <div
      className={`bg-brand-900/80 flex h-[3.5rem] items-center rounded-[1.7rem] px-6 ${
        className || ""
      } text-base`}
    >
      <Image
        className="mr-4 h-5 w-5"
        height={20}
        width={20}
        src="/images/loading.png"
        alt="Loading"
      />
      {text || "Bottom Text"}
    </div>
  );
};

export default Generating;
