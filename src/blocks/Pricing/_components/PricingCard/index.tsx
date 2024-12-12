import { Button } from "@/components/ui/Button";
import CheckTextRow from "@/components/ui/CheckTextRow";
import { cn } from "@/lib/utils";
import { PricingCardProps } from "@/types";

export default function PricingCard({
  title,
  description,
  price,
  features,
  plan,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "border-brand-600 bg-brand-900 grow rounded-[2rem] border px-6 py-8 max-lg:w-full lg:w-auto",
      )}
    >
      <h4
        className={cn(
          "h4 mb-4",
          plan === "basic" && "text-[#FFC876]",
          plan === "premium" && "text-primary",
          plan === "enterprise" && "text-[#FF776F]",
        )}
      >
        {title}
      </h4>

      <p className="body-2 mb-7 line-clamp-2 min-h-12 text-white/50">
        {description}
      </p>

      <div className="flex items-center text-white md:h-22">
        {price && (
          <>
            <span className="h3">$</span>
            <span className="text-[5.5rem] leading-none font-bold">
              {price}
            </span>
          </>
        )}
      </div>

      <Button
        as="a"
        className="my-6 w-full"
        href={price ? "/pricing" : "mailto:contact@jsmastery.pro"}
        white={price ? true : false}
      >
        {price ? "Get started" : "Contact us"}
      </Button>

      {features && (
        <ul className="divide-brand-600 border-t-brand-600 divide-y-[1px] border-t-[1px]">
          {features.map((plan, index) => (
            <CheckTextRow className="px-0 last:pb-0" {...plan} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
}
