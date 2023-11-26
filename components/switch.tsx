"use client";

import {useChangeLocale} from "../locales/client";

export function Switch() {
  const changeLocale = useChangeLocale();

  return (
    <div className="flex flex-row gap-5 justify-center">
      <button type="button" onClick={() => changeLocale("en")}>
        <div className="flex items-center w-fit h-3 ">
          <img alt="en-flag" src={`https://flag.vercel.app/s/GBR.svg`} />
          <span className="text-xs">{"\u00A0"}EN</span>
        </div>
      </button>
      <button type="button" onClick={() => changeLocale("es")}>
        <div className="flex items-center w-fit h-3 ">
          <img alt="es-flag" src={`https://flag.vercel.app/s/ES.svg`} />
          <span className="text-xs">{"\u00A0"}ES</span>
        </div>
      </button>
    </div>
  );
}
