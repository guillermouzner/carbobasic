import Image from "next/image";

import {getI18n} from "../../../locales/server";

export default async function AboutPage() {
  const t = await getI18n();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col gap-2 font-medium">
          <p>
            <span className="font-semibold text-blue-900">{t("carbo")}</span>
            <span className="font-semibold text-green-600">{t("basic")}</span>
            {t("about")}
          </p>
          <p>{t("about1")}</p>
          <p>
            {t("about2")}
            <span className="font-semibold text-blue-900">{t("carbo")}</span>
            <span className="font-semibold text-green-600">{t("basic")}</span>

            {t("about3")}
          </p>
          <p>
            {t("about4")}
            <span className="font-semibold text-blue-900">{t("carbo")}</span>
            <span className="font-semibold text-green-600">{t("basic")}</span>
            {t("about5")}
          </p>
        </div>

        <div className="flex flex-col gap-1 font-medium">
          <div className="flex flex-row gap-4">
            <Image
              alt="mision"
              className="hidden sm:flex rounded-md"
              height={250}
              src="/ourmision.jpg"
              // style={{aspectRatio: "1"}}
              width={250}
            />
            <div className="flex flex-col gap-2 m-1 sm:m-4">
              <p className="text-2xl font-black text-green-600">{t("about6")}</p>
              <p>
                {t("about7")} <span className="font-semibold text-blue-900">{t("about8")}</span>
                {t("about9")} <span className="font-semibold text-green-600">{t("about10")}</span>{" "}
                {t("about11")}
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-2 m-1 sm:m-4">
              <p className="text-2xl font-black text-green-600">{t("about12")}</p>
              <p>
                {t("about13")} <span className="font-semibold text-blue-900">{t("about14")}</span>{" "}
                {t("about15")}
                <span className="font-semibold text-green-600">{t("about16")}</span> {t("about17")}{" "}
                <span className="font-semibold text-blue-900">{t("about18")}</span>,
                <span className="font-semibold text-green-600">{t("about19")}</span> {t("about20")}{" "}
                <span className="font-semibold text-blue-900">{t("about21")}</span> {t("about22")}
              </p>
            </div>
            <Image
              alt="mision"
              // className="w-44 h-44 object-contain hidden sm:flex"
              className="hidden sm:flex rounded-md"
              height={250}
              src="/ourvision.jpg"
              width={250}
            />
          </div>

          <div className="flex flex-row gap-4">
            <Image
              alt="values"
              className="hidden sm:flex rounded-md"
              height={250}
              src="/ourvalues.jpg"
              width={250}
            />
            <div className="flex flex-col gap-2 m-1 sm:m-4">
              <p className="text-2xl font-black text-green-600">{t("about23")}</p>
              <p>
                <span className="font-semibold text-blue-900">Carbo</span>
                <span className="font-semibold text-green-600">Basic</span>
                {t("about24")}
                <span className="font-semibold text-green-600">{t("about25")}</span> {t("about26")}{" "}
                <span className="font-semibold text-blue-900">{t("about27")}</span> {t("about28")}{" "}
                <span className="font-semibold text-green-600">{t("about29")}</span> {t("about30")}{" "}
                <span className="font-semibold text-green-600">{t("about31")}</span> {t("about32")}{" "}
                <span className="font-semibold text-blue-900">Carbo</span>
                <span className="font-semibold text-green-600">Basic</span>
                {t("about33")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 font-medium">
        <div className="py-1 px-8 rounded-xl bg-green-600 text-lg text-blue-900 font-bold">
          <p>{t("about34")}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <Image
            alt="milton"
            className="rounded-xl"
            height={150}
            src="/aboutmilton.png"
            width={250}
          />
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-black text-green-600">{t("about35")}</p>
            <p className="text-lg">{t("about36")}</p>
            <p>{t("about37")}</p>
            <p>{t("about38")}</p>
            <p>{t("about39")}</p>
            <p>{t("about40")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
