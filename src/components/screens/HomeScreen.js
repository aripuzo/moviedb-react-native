import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator, Alert } from "react-native";
import {
    heightPercentageToDP as HP,
    widthPercentageToDP as WP,
  } from "react-native-responsive-screen";
import { Colors } from "../styles";
import { useStateContext } from "../../state";
import MovieListItem from "../ui/MovieListItem";
import EmptyListComponent from "../ui/EmptyList";
import SearchBar from "../ui/SearchBar";
import { FlatList } from "react-native-gesture-handler";
import { SET_PAGE } from "../../state/movie/type";
import useMovies from "../../hooks/useMovies";

const HomeScreen = ({ navigation }) => {
    const {
        state: { movieState },
        dispatch
    } = useStateContext();

    const { isLoading, query, movies, page } = movieState;

    const { searchMovies } = useMovies();

    useEffect(() => {
        if (movieState.errorMessage)
            Alert.alert("Error", movieState.errorMessage, [
            { text: "Ok", style: "cancel" },
        ]);
    }, [movieState.errorMessage]);

    useEffect(() => {
        searchMovies({
            query: searchTerm,
        });
    }, [navigation]);

    handleRefresh = () => {
        dispatch({
            type: SET_PAGE,
            payload: 1,
        });
        searchMovies(query, 1);
    };

    handleLoadMore = () => {
        dispatch({
            type: SET_PAGE,
            payload: page + 1,
        });
        searchMovies(query, page + 1);
    };

    return (
        <View style={styles.viewStyle}>
            <SearchBar/>
            <FlatList
                ListEmptyComponent={isLoading ? <ActivityIndicator color={Colors.PRIMARY} /> : EmptyListComponent}
                data={movies}
                renderItem={({ item }) => (
                    <MovieListItem movie={item} navigation={navigation} />
                )}
                keyExtractor={item => item.id}
                onRefresh={this.handleRefresh}
                refreshing={isLoading}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={50}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: Colors.BACKGROUND,
        flex: 1,
        flexDirection: "column",
    },
    listHeaderStyle: {
        color: Colors.PRIMARY,
        flex: 1,
        fontSize: WP(3.4),
        fontFamily: "Graphit-Bold",
        textTransform: "uppercase",
        backgroundColor: Colors.GRAY_MEDIUM,
        paddingVertical: WP(2.5),
        paddingHorizontal: WP(2.5),
    },
    searchStyle: {
        flexDirection: "row",
        marginTop: 64,
        backgroundColor: Colors.WHITE,
        padding: 16,
        borderRadius: WP(2.8),
        marginVertical: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: HP(0.4) },
        shadowOpacity: 0.2,
        elevation: 2,
        marginHorizontal: 32,
    },
    searchTextStyle: {
        marginRight: 12,
        alignSelf: "center",
        backgroundColor: "white",
        color: Colors.GRAY_MEDIUM,
        fontSize: WP(4.3),
        flex: 1
    },
    imageButtonStyle: {
        alignItems: "center",
        justifyContent: "center",
        height: HP(5),
        width: HP(5),
        borderRadius: WP(2.8),
        backgroundColor: Colors.SECONDARY,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: HP(0.4) },
        shadowOpacity: HP(0.03),
        elevation: 2,
    },
    titleStyle: {
        color: Colors.WHITE,
        fontStyle: "normal",
        fontSize: WP(6),
        alignSelf: "flex-start",
        marginTop: 76,
        marginHorizontal: 32,
        fontFamily: "Graphit-Regular",
    },
        nameStyle: {
        color: Colors.WHITE,
        fontSize: WP(6),
        alignSelf: "flex-start",
        marginTop: 5,
        marginHorizontal: 32,
        fontFamily: "Graphit-Bold",
    }
});

export default HomeScreen;