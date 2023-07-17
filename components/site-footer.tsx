import * as React from "react";
import Image from "next/image";

import {cn} from "@/lib/utils";
import {ModeToggle} from "@/components/mode-toggle";

export function SiteFooter({className}: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className, "py-4")}>
      <div className="container flex items-center justify-between gap-4 md:h-24 flex-col lg:flex-row py-2">
        <div className="flex flex-row items-center gap-2">
          <Image
            alt="Milton"
            className="hidden lg:block"
            height={75}
            src="/carbobasicfooter.png"
            width={75}
          />

          <div className="flex flex-row gap-1 lg:flex-col font-bold text-lg md:text-xl">
            <p className="uppercase text-blue-900 text-lg md:text-2xl">
              carbo<span className="text-green-600">Basic</span>
            </p>
            <p className="uppercase">engineering Ltd.</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 font-medium">
          <p className="capitalize text-center">
            for any inquiries please contact on our social networks:
          </p>
          <div className="flex flex-row gap-8 items-center justify-center">
            <a
              className="hover:underline"
              href="mailto:info@carbobasic.co.uk"
              rel="noreferrer"
              target="_blank"
            >
              email
            </a>
            <a
              className="hover:underline"
              href="https://www.facebook.com/Carbobasic/"
              rel="noreferrer"
              target="_blank"
            >
              facebook
            </a>
            <a
              className="hover:underline"
              href="https://wa.me/447438389980"
              rel="noreferrer"
              target="_blank"
            >
              whatsapp
            </a>
          </div>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
