import { LinkItem } from "@/types";
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
  className,
  onlyMobile,
  handleClick,
}: NavLinkProps) {
  return (
    <Link
      key={id}
      href={url || "#"}
      className={`font-code hover:text-primary relative block text-2xl text-white uppercase transition-colors lg:text-white/50 ${
        onlyMobile ? "lg:hidden" : ""
      } px-6 py-6 md:py-8 lg:-mr-0.25 lg:px-12 lg:text-xs lg:leading-5 lg:font-semibold lg:hover:text-white ${className || ""}`}
      onClick={handleClick}
    >
      {label || "Link"}
    </Link>
  );
}
