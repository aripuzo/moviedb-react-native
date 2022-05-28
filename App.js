import 'react-native-gesture-handler';
import React from "react";
import { enableScreens } from "react-native-screens";
enableScreens();

import { App } from "./src/navigation";
import { StateProvider } from "./src/state";

export default () => {
  return (
    <StateProvider>
      <App />
    </StateProvider>
  );
};
