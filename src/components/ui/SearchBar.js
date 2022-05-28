import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import debounce from "lodash.debounce";
import { Feather } from "@expo/vector-icons";
import {
  heightPercentageToDP as HP,
  widthPercentageToDP as WP,
} from "react-native-responsive-screen";

import { Colors } from "../styles";
import useMovies from "../../hooks/useMovies";
import { useStateContext } from "../../state";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState(null);
  const { searchMovies } = useMovies();
  const {
    state: { movieState },
  } = useStateContext();

  useEffect(() => {
    if (searchText !== null)
        searchMovies({ query: searchText });
  }, [searchText]);

  /**  ensure `performSearch` is Invoke once after 1 seconds after debounce when searchText changes. **/
  const handleTextChange = debounce(setSearchText, 250, {
    maxWait: 1000,
    leading: true,
    trailing: false,
  });

  return (
    <View style={styles.mainStyle}>
      <View style={styles.backgroundStyle}>
        <Feather
          name="search"
          size={WP(4.5)}
          color={Colors.GRAY_MEDIUM}
          style={{ marginLeft: WP(4.4) }}
        />
        <TextInput
          style={styles.editTextStyle}
          placeholder="Search movies"
          onChangeText={handleTextChange}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    justifyContent: "center",
  },
  backgroundStyle: {
    backgroundColor: Colors.WHITE,
    height: HP(7),
    borderRadius: WP(3),
    padding: WP(2),
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  editTextStyle: {
    flex: 1,
    fontSize: WP(4.4),
    paddingHorizontal: WP(3),
    color: "#2D2F48",
  },
});

export default SearchBar;
