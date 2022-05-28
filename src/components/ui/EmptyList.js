import React from "react";
import { Text } from "react-native";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";

import { Colors } from "../styles";

const EmptyListComponent = () => (
  <Text
    style={{
      alignSelf: "center",
      marginTop: 40,
      fontSize: WP(4.4),
      color: Colors.GRAY_DARK,
    }}
  >
    Empty List
  </Text>
);

export default EmptyListComponent;