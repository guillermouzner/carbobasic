import {createI18nMiddleware} from "next-international/middleware";
import {NextRequest} from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "es"],
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!_next|blog|post|admin|login|api|editor|.*\\.jpg$|.*\\.jpeg$|.*\\.png$|.*\\.gif$).*)",
  ],
};
