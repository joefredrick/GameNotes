import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import FreeGamePageSection from "../containers/FreeGamePageSection";
import { NaviRouteScreenNavigationProps } from "../types";

interface FreeGamePageProps {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
}

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const FreeGamePage: React.FunctionComponent<FreeGamePageProps> = (
    { navigation }
) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>Free Games</Text>
            </View>
            <FreeGamePageSection navigation={navigation}/>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DEE9FD",
        height: HEIGHT,
        width: WIDTH,
        alignItems: 'center',
    },
    headerSection: {
      width: '100%',
      height: '8%',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#DEE9FD',
    },
    headerText: {
      color: '#91A1BD',
      marginTop: 20,
      fontSize: 26,
      fontFamily: 'MW_Regular',
    },
});

export default FreeGamePage;