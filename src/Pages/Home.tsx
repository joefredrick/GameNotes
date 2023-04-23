import React from "react";
import { StyleSheet, View, Dimensions} from "react-native";
import HomeContainer from "../containers/HomeContainer";
import PlatformListH from "../containers/GamePlatformList";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const Home = (props: any) => {
    return(
        <View style={styles.container}>
            <HomeContainer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d4e3ea",
        height: HEIGHT,
        width: WIDTH,
    }
})

export default Home;