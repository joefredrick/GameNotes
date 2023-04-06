import React from "react";
import { StyleSheet, View } from "react-native";
import { NaviRouteScreenNavigationProps } from "../types";
import GameInfoPageSection from "../containers/GameInfoPageSection";

interface GameInfoPageProps {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
    route: any;
}

const GameInfoPage: React.FunctionComponent<GameInfoPageProps> = (props) => {
    return(
        <View style={styles.container}>
            <GameInfoPageSection navigation={props.navigation} data={props.route.params}></GameInfoPageSection>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d4e3ea",
    },
});
export default GameInfoPage;