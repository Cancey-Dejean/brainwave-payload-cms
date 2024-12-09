import { cn } from "@/lib/utils";
import { LinkItem } from "@/types";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

type NavLinkProps = LinkItem & {
  className?: string;
  onlyMobile?: boolean;
  handleClick?: () => void;
};

export default function NavLink({
  id,
  label,
  url,
  newTab,
  className,
  onlyMobile,
  handleClick,
}: NavLinkProps) {
  return (
    <Link
      key={id}
      href={url || "#"}
      className={cn(
        "font-code hover:text-primary relative inline-flex items-center gap-2 px-6 py-6 text-2xl text-white uppercase transition-colors md:py-8 lg:-mr-0.25 lg:px-12 lg:text-xs lg:leading-5 lg:font-semibold lg:text-white/50 lg:hover:text-white",
        onlyMobile && "lg:hidden",
        className,
      )}
      onClick={handleClick}
      target={newTab ? "_blank" : undefined}
    >
      {label || "Link"}

      {newTab && <SquareArrowOutUpRight className="size-3" />}
    </Link>
  );
}
