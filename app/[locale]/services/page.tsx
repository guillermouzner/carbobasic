import Image from "next/image";

import {getI18n} from "../../../locales/server";

export default async function ServicesPage() {
  const t = await getI18n();

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 font-medium">
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-semibold text-blue-900">Carbo</span>
            <span className="font-semibold text-green-600">Basic</span> {t("services")}
          </p>
          <p>{t("services1")}</p>
          <p>
            <span className="font-semibold text-blue-900">Carbo</span>
            <span className="font-semibold text-green-600">Basic</span> {t("services2")}
          </p>
          <p>{t("services3")}</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              alt="cyrogenic"
              className="rounded-xl order-2 md:order-1"
              height={250}
              src="/cyrogenic.png"
              width={250}
            />
            <div className="flex flex-col gap-3 order-1 md:order-2">
              <p className="text-lg max-w-min px-2 py-1 font-bold text-blue-900 border-2 rounded-lg border-green-600">
                {t("services4")}
              </p>
              <p className="text-sm">{t("services5")}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              alt="petrochemical"
              className="rounded-xl order-2 md:order-1"
              height={250}
              src="/petrochemical.png"
              width={250}
            />
            <div className="flex flex-col gap-3 order-1 md:order-2">
              <p className="text-lg max-w-min px-2 py-1 font-bold text-blue-900 border-2 rounded-lg border-green-600">
                {t("services6")}
              </p>
              <p className="text-sm">
                {t("services7")} <span className="font-semibold text-blue-900">Carbo</span>
                <span className="font-semibold text-green-600">Basic</span> {t("services9")}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              alt="oilgas"
              className="rounded-xl order-2 md:order-1"
              height={250}
              src="/oilgas.png"
              width={250}
            />
            <div className="flex flex-col gap-3 order-1 md:order-2">
              <p className="text-lg whitespace-nowrap max-w-min px-2 py-1 font-bold text-blue-900 border-2 rounded-lg border-green-600">
                {t("services10")}
              </p>
              <p className="text-sm">
                {t("services11")} <span className="font-semibold text-blue-900">Carbo</span>
                <span className="font-semibold text-green-600">Basic</span> {t("services13")}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              alt="cyrogenic"
              className="rounded-xl order-2 md:order-1"
              height={250}
              src="/cyrogenic.png"
              width={250}
            />
            <div className="flex flex-col gap-3 order-1 md:order-2">
              <p className="text-lg max-w-min px-2 py-1 font-bold text-blue-900 border-2 rounded-lg border-green-600">
                {t("services14")}
              </p>
              <p className="text-sm">{t("services15")}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              alt="cyrogenic"
              className="rounded-xl order-2 md:order-1"
              height={250}
              src="/cyrogenic.png"
              width={250}
            />
            <div className="flex flex-col gap-3 order-1 md:order-2">
              <p className="text-lg max-w-min px-2 py-1 font-bold text-blue-900 border-2 rounded-lg border-green-600">
                {t("services16")}
              </p>
              <p className="text-sm">{t("services17")}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center">
            <Image
              alt="cyrogenic"
              className="rounded-xl order-2 md:order-1"
              height={250}
              src="/cyrogenic.png"
              width={250}
            />
            <div className="flex flex-col gap-3 order-1 md:order-2">
              <p className="text-lg whitespace-nowrap max-w-min px-2 py-1 font-bold text-blue-900 border-2 rounded-lg border-green-600">
                {t("services18")}
              </p>
              <p className="text-sm">{t("services19")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
