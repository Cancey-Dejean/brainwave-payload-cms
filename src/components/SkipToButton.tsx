import { Button } from "@/components/ui/Button";

export default function SkipToButton({
  url = "#main",
  text = "content",
}: {
  url: string;
  text: string;
}) {
  return (
    <a
      className="fixed top-0 left-3 z-[1000] -translate-y-full bg-white p-4 text-black transition-transform duration-300 ease-in-out focus:translate-y-0"
      href={url}
    >
      Skip to {text}
    </a>
  );
}
