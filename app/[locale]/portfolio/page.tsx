"use client";

import * as React from "react";
import Image from "next/image";

import {useI18n} from "../../../locales/client";

import {cn} from "@/lib/utils";
import {ProjectRecord} from "@/components/milton/project-record";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {Button} from "@/components/ui/button";

export default function PortfolioPage() {
  const t = useI18n();

  const [toggleStateA, setToggleStateA] = React.useState(1);

  function toggleTabA(index: number) {
    setToggleStateA(index);
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col justify-center items-center gap-5 font-medium">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                className="relative cursor-pointer w-56 md:w-72 h-56 md:h-72"
                variant="milton"
              >
                <Image
                  priority
                  alt="industries"
                  className="object-cover w-full h-full rounded-xl"
                  height={288}
                  src="/industries.png"
                  width={288}
                />
                <p className="absolute top-[8px] left-1/2 transform -translate-x-1/2 text-white bg-green-600 px-6 py-2 rounded-md">
                  {t("portfolio1")}
                </p>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader className="flex flex-col items-center justify-center">
                <AlertDialogTitle>
                  {t("portfolio1")}
                  <AlertDialogCancel className="absolute right-0 top-0 rounded-sm opacity-70 hover:opacity-100">
                    X
                  </AlertDialogCancel>
                </AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio39")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio40")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio41")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio42")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio43")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio44")}
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                className="relative cursor-pointer w-56 md:w-72 h-56 md:h-72"
                variant="milton"
              >
                <Image
                  alt="projects"
                  className="object-cover w-full h-full rounded-xl"
                  height={300}
                  src="/projects.png"
                  width={300}
                />
                <p className="absolute top-[8px] left-1/2 transform -translate-x-1/2 text-white bg-green-600 px-6 py-2 rounded-md">
                  {t("portfolio2")}
                </p>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader className="flex flex-col items-center justify-center">
                <AlertDialogTitle>
                  {t("portfolio2")}
                  <AlertDialogCancel className="absolute right-0 top-0 rounded-sm opacity-70 hover:opacity-100">
                    X
                  </AlertDialogCancel>
                </AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio46")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio47")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio48")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio49")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio50")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio51")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio52")}
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                className="relative cursor-pointer w-56 md:w-72 h-56 md:h-72"
                variant="milton"
              >
                <Image
                  alt="services"
                  className="object-cover w-full h-full rounded-xl"
                  height={300}
                  src="/services.png"
                  width={300}
                />
                <p className="absolute top-[8px] left-1/2 transform -translate-x-1/2 text-white bg-green-600 px-6 py-2 rounded-md">
                  {t("portfolio3")}
                </p>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader className="flex flex-col items-center justify-center">
                <AlertDialogTitle>
                  {t("portfolio3")}
                  <AlertDialogCancel className="absolute right-0 top-0 rounded-sm opacity-70 hover:opacity-100">
                    X
                  </AlertDialogCancel>
                </AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio53")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio54")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio55")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio56")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio57")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio58")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio59")}
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                className="relative cursor-pointer w-56 md:w-72 h-56 md:h-72"
                variant="milton"
              >
                <Image
                  alt="expertise"
                  className="object-cover w-full h-full rounded-xl"
                  height={300}
                  src="/expertise.png"
                  width={300}
                />
                <p className="absolute top-[8px] left-1/2 transform -translate-x-1/2 text-white bg-green-600 px-6 py-2 rounded-md">
                  {t("portfolio4")}
                </p>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader className="flex flex-col items-center justify-center">
                <AlertDialogTitle>
                  {t("portfolio4")}
                  <AlertDialogCancel className="absolute right-0 top-0 rounded-sm opacity-70 hover:opacity-100">
                    X
                  </AlertDialogCancel>
                </AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio60")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio61")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio62")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio63")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio64")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio65")}
                </AlertDialogDescription>
                <AlertDialogDescription className="flex flex-col gap-1 text-base font-semibold">
                  • {t("portfolio66")}
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="py-1 px-8 rounded-xl bg-green-600 text-lg text-blue-900 font-bold">
          <p>{t("portfolio5")}</p>
        </div>

        <div className="py-1 px-8 font-bold text-xl">
          <p className="text-green-600">
            CARBO<span className="text-blue-900">BASIC</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ProjectRecord project={t("portfolio01")} year={2023} />
          <ProjectRecord project={t("portfolio02")} year={2023} />
          <ProjectRecord project={t("portfolio03")} year={2023} />
          <ProjectRecord project={t("portfolio04")} year={2022} />
          <ProjectRecord project={t("portfolio6")} year={2022} />
          <ProjectRecord project={t("portfolio7")} year={2022} />
          <ProjectRecord project={t("portfolio8")} year={2021} />
          <ProjectRecord project={t("portfolio9")} year={2021} />
          <ProjectRecord project={t("portfolio10")} year={2020} />
          <ProjectRecord project={t("portfolio11")} year={2020} />
          <ProjectRecord project={t("portfolio12")} year={2019} />
        </div>

        <div className="flex flex-col lg:flex-row py-1 px-8 text-xs items-center gap-3">
          <p className="text-green-600 text-2xl font-bold">
            MILTON <span className="text-blue-900">AVILA</span>
          </p>
          <div className="flex whitespace-nowrap flex-col md:flex-row gap-3 font-light">
            <p
              className={cn(
                "px-4 py-1 rounded-lg border cursor-pointer bg-background font-semibold transition duration-500 ease-in-out hover:bg-green-600 hover:border-blue-900",
                toggleStateA === 1 ? "bg-green-600 border-blue-900 font-semibold" : "",
              )}
              onClick={() => toggleTabA(1)}
            >
              {t("portfolio13")}
            </p>
            <p
              className={cn(
                "px-4 py-1 rounded-lg border cursor-pointer bg-background font-semibold transition duration-500 ease-in-out hover:bg-green-600 hover:border-blue-900",
                toggleStateA === 2 ? "bg-green-600 border-blue-900 font-semibold" : "",
              )}
              onClick={() => toggleTabA(2)}
            >
              {t("portfolio14")}
            </p>
            <p
              className={cn(
                "px-4 py-1 rounded-lg border cursor-pointer bg-background font-semibold transition duration-500 ease-in-out hover:bg-green-600 hover:border-blue-900",
                toggleStateA === 3 ? "bg-green-600 border-blue-900 font-semibold" : "",
              )}
              onClick={() => toggleTabA(3)}
            >
              {t("portfolio15")}
            </p>
          </div>
        </div>

        <div
          className={cn("grid-cols-1 md:grid-cols-2 gap-5", toggleStateA === 1 ? "grid" : "hidden")}
        >
          <ProjectRecord project={t("portfolio16")} year={2019} />
          <ProjectRecord project={t("portfolio17")} year={2018} />
          <ProjectRecord project={t("portfolio18")} year={2018} />
          <ProjectRecord project={t("portfolio19")} year={2017} />
          <ProjectRecord project={t("portfolio20")} year={2017} />
          <ProjectRecord project={t("portfolio21")} year={2016} />
          <ProjectRecord project={t("portfolio22")} year={2015} />
          <ProjectRecord project={t("portfolio23")} year={2015} />
          <ProjectRecord project={t("portfolio24")} year={2015} />
          <ProjectRecord project={t("portfolio25")} year={2014} />
          <ProjectRecord project={t("portfolio26")} year={2014} />
          <ProjectRecord project={t("portfolio27")} year={2013} />
        </div>

        <div
          className={cn("grid-cols-1 md:grid-cols-2 gap-5", toggleStateA === 2 ? "grid" : "hidden")}
        >
          <ProjectRecord project={t("portfolio28")} year={2012} />
          <ProjectRecord project={t("portfolio29")} year={2011} />
          <ProjectRecord project={t("portfolio30")} year={2009} />
          <ProjectRecord project={t("portfolio31")} year={2008} />
          <ProjectRecord project={t("portfolio32")} year={2007} />
          <ProjectRecord project={t("portfolio33")} year={2006} />
          <ProjectRecord project={t("portfolio34")} year={2006} />
          <ProjectRecord project={t("portfolio35")} year={2005} />
          <ProjectRecord project={t("portfolio36")} year={2005} />
        </div>

        <div
          className={cn("grid-cols-1 md:grid-cols-2 gap-5", toggleStateA === 3 ? "grid" : "hidden")}
        >
          <ProjectRecord project={t("portfolio37")} year={2004} />
          <ProjectRecord project={t("portfolio38")} year={2003} />
        </div>
      </div>
    </div>
  );
}
