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

const App = () => {
  return (
    <SafeAreaView>
      <Text>ProjectName</Text>
      <Text>{Env.ENV}</Text>
    </SafeAreaView>
  );
};

export default App;
