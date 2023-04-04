import React from "react";
import { View } from "react-native";
import { NaviRouteScreenNavigationProps } from "../types";
import FreeGamePageSection from "../containers/FreeGamePageSection";

interface FreeGamePageProps {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
}

const FreeGamePage: React.FunctionComponent<FreeGamePageProps> = (
    { navigation }
) => {
    return(
        <View>
            <FreeGamePageSection navigation={navigation}></FreeGamePageSection>
        </View>
    )
}

export default FreeGamePage;