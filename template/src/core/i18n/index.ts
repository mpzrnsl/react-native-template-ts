/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/**
 * ProjectName
 *
 * Author: Phia Nasol
 *
 *
 */

import "./polyfill";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../assets/locales/en.json";
import Env from "../env";
import languageDetector from "./languageDetector";

export const defaultNS = "translation";

export const resources = {
  en
} as const;

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: Env.get("ENV") === "development",
    fallbackLng: "en",
    supportedLngs: ["en", "en-US"],
    ns: ["translation"],
    resources
  });

export default i18n;
