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
import Env from "react-native-config";
import ErrorBoundary from "react-native-error-boundary";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Logger, persistor, store } from "@core";

import { useLifecycleLogger } from "@core/hooks";
import { darkNavigationTheme, lightNavigationTheme, theme } from "@core/styles";

const appErrorHandler = (error: Error, stackTrace: string) => {
  const logger = Logger.extend("SYSTEM");

  logger.error(error, stackTrace);
};

const App = () => {
  useLifecycleLogger(App.name);

  const isDarkMode = useColorScheme() === "dark";

  return (
    <ErrorBoundary onError={appErrorHandler}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer theme={isDarkMode ? darkNavigationTheme : lightNavigationTheme}>
              <ThemeProvider theme={theme}>
                <SafeAreaView>
                  <Text>ProjectName</Text>
                  <Text>{Env.ENV}</Text>
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
