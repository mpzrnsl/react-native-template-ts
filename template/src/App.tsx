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
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "@core";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView>
          <Text>ProjectName</Text>
          <Text>{Env.ENV}</Text>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
