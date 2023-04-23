import React from "react";
import { StyleSheet, View } from "react-native";
import FreeGamePageSection from "../containers/FreeGamePageSection";
import { NaviRouteScreenNavigationProps } from "../types";

interface FreeGamePageProps {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
}

const FreeGamePage: React.FunctionComponent<FreeGamePageProps> = (
    { navigation }
) => {
    return (
        <View style={styles.container}>
        <FreeGamePageSection navigation={navigation}/></View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d4e3ea",
    },
});

export default FreeGamePage;