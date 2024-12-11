import Link from "next/link";
import { Button } from "./ui/Button";

export default function PageNotFound({
  title = "404",
  message = "This page could not be found.",
  buttonLabel = "Go home",
  buttonUrl = "/",
}: {
  title?: string;
  message?: string;
  buttonLabel?: string;
  buttonUrl?: string;
}) {
  return (
    <section className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p>{message}</p>

        <Button as="a" href={buttonUrl}>
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
