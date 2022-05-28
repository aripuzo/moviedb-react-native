import {
    heightPercentageToDP as HP,
    widthPercentageToDP as WP,
  } from "react-native-responsive-screen";
  
  import * as Colors from "./color";
  
  import { StyleSheet } from "react-native";
  
  export { Colors };
  
  export const Styles = StyleSheet.create({
    viewStyle: {
      backgroundColor: Colors.BACKGROUND,
      flex: 1,
      padding: HP(2),
      flexDirection: "column",
    },
    lineStyle: {
      borderWidth: WP(0.1),
      borderColor: Colors.GRAY_LIGHT,
      marginVertical: WP(2.1),
    },
  });