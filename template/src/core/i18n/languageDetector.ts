/**
 * ProjectName
 *
 * Author: Phia Nasol
 *
 */

import { LanguageDetectorModule } from "i18next";
import { findBestAvailableLanguage } from "react-native-localize";

const languageDetector: LanguageDetectorModule = {
  type: "languageDetector",
  init: () => {},
  detect: () => {
    const bestAvailableLanguage = findBestAvailableLanguage(["en", "en-US"]);

    return bestAvailableLanguage?.languageTag;
  },
  cacheUserLanguage: () => {}
};

export default languageDetector;
