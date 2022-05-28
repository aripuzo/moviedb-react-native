import React from "react";
import { View, TouchableWithoutFeedback, StyleSheet, Text, Image } from "react-native";
import {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
} from "react-native-responsive-screen";
import { Colors, Styles } from "../styles";

const widthHeight = HP(9);

const MovieListItem = ({ navigation, movie }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate("DetailsScreen", { movie })}
        >
        <View style={styles.cardStyle}>
            <Image source = {{uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
                    style = {{ height: 100 }}
                />
        <View style={styles.subStyle}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.titleStyle}>{`${movie.title}`}</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: WP(1.2) }}>
            <Text style={styles.lightStyle}>
              {movie.release_date}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: Colors.WHITE,
    paddingBottom: HP(1.5),
    borderRadius: WP(2.8),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: HP(0.4) },
    shadowOpacity: 0.2,
    elevation: 2,
    flex: 1,
    flexDirection: 'column',
    margin: HP(1.0)
  },
  backgroundStyle: {
    borderRadius: WP(3),
    padding: WP(2),
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: WP(2),
    marginVertical: WP(1.2),
  },
  subStyle: {
    flex: 1,
    alignSelf: "center",
    marginLeft: WP(2),
    alignContent: "space-between"
  },
  titleStyle: {
    fontSize: WP(4.3)
  },
  subtitleStyle: {
    fontSize: WP(3.6),
    fontStyle: "normal",
    color: Colors.GRAY_MEDIUM,
    marginLeft: WP(2),
  },
  dateStyle: {
    fontSize: WP(3.6),
    flex: 1,
    fontStyle: "normal",
    fontWeight: "200",
    marginLeft: WP(2),
  },
  lightStyle: {
    fontSize: WP(3.8),
    fontStyle: "normal",
    color: Colors.SECONDARY
  },
  lightStyle2: {
    fontSize: WP(3.6),
    fontStyle: "normal",
    color: Colors.PRIMARY,
    textTransform: "capitalize",
  },
  midStyle: {
    flex: 1,
    flexDirection: "row",
    marginTop: WP(2),
    justifyContent: "center",
    alignContent: "center",
  },
});

export default MovieListItem;
