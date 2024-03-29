"use client";

import * as React from "react";
import Link from "next/link";
import {useSelectedLayoutSegment} from "next/navigation";
import {MainNavItem} from "types";

import {siteConfig} from "@/config/site";
import {cn} from "@/lib/utils";
import {Icons} from "@/components/icons";
import {MobileNav} from "@/components/mobile-nav";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({items, children}: MainNavProps) {
  const segment = useSelectedLayoutSegment();

  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex flex-row justify-center items-center w-full gap-6 md:gap-10">
      <div className="flex flex-row gap-6 md:gap-10">
        <Link className="hidden items-center space-x-2 md:flex" href="/">
          <Icons.logo />
          <span className="hidden font-bold sm:inline-block">{siteConfig.name}</span>
        </Link>
        {items?.length ? (
          <nav className="hidden gap-6 md:flex">
            {items?.map((item, index) => (
              <Link
                key={index}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`) ? "text-foreground" : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
                href={item.disabled ? "#" : item.href}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold capitalize">{segment ? segment : "Carbobasic"}</span>
      </button>
      {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
    </div>
  );
}
