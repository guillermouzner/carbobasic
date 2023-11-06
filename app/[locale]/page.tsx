import Image from "next/image";

// import {getI18n, getCurrentLocale, getStaticParams} from "../../../locales/server";
import {getI18n} from "../../locales/server";

export default async function IndexPage() {
  const t = await getI18n();
  // const locale = getCurrentLocale();

  return (
    <div className="flex flex-col justify-center items-center gap-10 min-h-full">
      <Image alt="Milton" height={256} src="/milton.png" width={256} />
      <h1 className="text-sm md:text-xl lg:text-3xl capitalize text-sky-900 border p-3 rounded-xl border-green-600">
        {t("home")} <span className="font-black">{t("home2")}</span>
      </h1>
    </div>
  );
}
