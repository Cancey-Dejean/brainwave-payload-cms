import React from "react";
// import Container from "@/components/ui/container";
// import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Button } from "./ui/button";

export default function PageNotFound({
  title = "404",
  message = "This page could not be found.",
  buttonText = "Go home",
  buttonUrl = "/",
}: {
  title?: string;
  message?: string;
  buttonText?: string;
  buttonUrl?: string;
}) {
  return (
    <section className="flex h-full items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p>{message}</p>

        <Button asChild>
          <Link href={buttonUrl}>{buttonText}</Link>
        </Button>
      </div>
    </section>
  );
}