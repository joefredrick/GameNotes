import React from "react";
import { StyleSheet, View } from "react-native";
import { NaviRouteScreenNavigationProps } from "../types";
import FreeGamePageSection from "../containers/FreeGamePageSection";
import GameInfoPageSection from "../containers/GameInfoPageSection";

interface GameInfoPageProps {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
}

const GameInfoPage: React.FunctionComponent<GameInfoPageProps> = (
    { navigation }
) => {
    return(
        <View style={styles.container}>
            <GameInfoPageSection navigation={navigation}></GameInfoPageSection>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d4e3ea",
    },
});
export default GameInfoPage;