/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 *
 */

import "react-native-gesture-handler";

import React from "react";
import { SafeAreaView, Text, useColorScheme } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import { useTranslation } from "react-i18next";
import ErrorBoundary from "react-native-error-boundary";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Env, Logger, persistor, store } from "@core";

import { useLifecycleLogger } from "@core/hooks";
import { darkNavigationTheme, lightNavigationTheme, theme } from "@core/styles";

const appErrorHandler = (error: Error, stackTrace: string) => {
  Logger.extend("SYSTEM").error(error, stackTrace);
};

const App = () => {
  useLifecycleLogger(App.name);

  const { t } = useTranslation("translation", { keyPrefix: "app" });

  const isDarkMode = useColorScheme() === "dark";

  return (
    <ErrorBoundary onError={appErrorHandler}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer theme={isDarkMode ? darkNavigationTheme : lightNavigationTheme}>
              <ThemeProvider theme={theme}>
                <SafeAreaView>
                  <Text>{t("name")}</Text>
                  <Text>{Env.get("ENV")}</Text>
                </SafeAreaView>
              </ThemeProvider>
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
