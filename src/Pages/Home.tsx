import React from "react";
import { ScrollView, } from "react-native";
import HomeContainer from "../containers/HomeContainer";
import PlatformListH from "../containers/PlatformListH";

const Home = () => {
    return(
        <ScrollView>
            <HomeContainer />
            <PlatformListH />
        </ScrollView>
    )
}

export default Home;