/**
 * ProjectName
 *
 * Author:
 * Company:
 *
 *
 */

import React from "react";
import { SafeAreaView, Text } from "react-native";

import Env from "react-native-config";
import ErrorBoundary from "react-native-error-boundary";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Logger, persistor, store } from "@core";

import { useLifecycleLogger } from "@core/hooks";

const appErrorHandler = (error: Error, stackTrace: string) => {
  const logger = Logger.extend("SYSTEM");

  logger.error(error, stackTrace);
};

const App = () => {
  useLifecycleLogger(App.name);

  return (
    <ErrorBoundary onError={appErrorHandler}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <SafeAreaView>
            <Text>ProjectName</Text>
            <Text>{Env.ENV}</Text>
          </SafeAreaView>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
