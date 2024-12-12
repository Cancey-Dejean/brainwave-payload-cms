"use client";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./_components/NavLink";

import { Button } from "@/components/ui/Button";
import { MenuSvg } from "@/components/icons";
import { LinkItem, SimpleImage } from "@/types";
import { HamburgerMenu } from "@/components/ui/Header/_components/designs";
import { cn } from "@/lib/utils";

// export const navigation = [
//   {
//     id: "0",
//     label: "Features",
//     url: "#features",
//     onlyMobile: false,
//   },
//   {
//     id: "1",
//     label: "Pricing",
//     url: "#pricing",
//     onlyMobile: false,
//   },
//   {
//     id: "2",
//     label: "How to use",
//     url: "#how-to-use",
//     onlyMobile: false,
//   },
//   {
//     id: "3",
//     label: "Roadmap",
//     url: "#roadmap",
//     onlyMobile: false,
//   },
//   {
//     id: "4",
//     label: "New account",
//     url: "#signup",
//     onlyMobile: true,
//   },
//   {
//     id: "5",
//     label: "Sign in",
//     url: "#login",
//     onlyMobile: true,
//   },
// ];

export type MenuItem = LinkItem & {
  onlyMobile?: boolean;
};

export type HeaderProps = {
  stickyHeader?: boolean;
  logoImage?: string;
  logoAlt?: string;
  logoText?: string;
  ctaButton?: LinkItem;
  primaryMenu?: MenuItem[];
  secondaryMenu?: LinkItem[];
  logo?: SimpleImage;
};

export default function Header({
  logo,
  primaryMenu,
  secondaryMenu,
  ctaButton,
}: HeaderProps) {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <header
      // className={` lg:bg-brand-900/90 sticky top-0 left-0 z-50 w-full border-b lg:backdrop-blur-sm ${openNavigation ? "bg-brand-900" : "bg-brand-900/90 backdrop-blur-sm"}`}

      className={cn(
        "xl:bg-brand-900/90 sticky top-0 left-0 z-50 w-full border-b lg:backdrop-blur-sm",
        openNavigation ? "bg-brand-900" : "bg-brand-900/90 backdrop-blur-sm",
      )}
    >
      <div className="flex items-center px-5 max-xl:py-4 lg:px-7.5 xl:px-10">
        <Link className="max-w-[12rem]" href="#hero">
          <Image
            src={logo?.url || "https://dummyimage.com/190x40.png/ac6aff/ffffff"}
            width={192}
            height={40}
            alt={logo?.alt || "Brainwave Logo"}
            priority
          />
        </Link>

        <nav
          className={cn(
            "bg-brand-900 fixed top-[5rem] right-0 bottom-0 left-0 xl:static xl:mx-auto xl:flex xl:bg-transparent",
            openNavigation ? "flex justify-center" : "hidden",
          )}
        >
          <div className="relative z-2 flex flex-col items-center justify-center lg:flex-row">
            {primaryMenu &&
              primaryMenu.map((item, index) => (
                <NavLink
                  key={index}
                  {...item}
                  url={item.url || "/"}
                  handleClick={handleClick}
                />
              ))}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="hidden items-center gap-8 xl:flex">
          {/* Authentication */}
          <div className="flex items-center gap-8">
            {secondaryMenu?.map((item, index) => (
              <NavLink
                key={index}
                {...item}
                url={item.url || "/"}
                handleClick={handleClick}
                className="!px-0"
              />
            ))}
          </div>

          {ctaButton && (
            <Button as="a" href={ctaButton.url || "/"}>
              {ctaButton.label}
            </Button>
          )}
        </div>

        <Button
          as="button"
          className="ml-auto xl:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
}
