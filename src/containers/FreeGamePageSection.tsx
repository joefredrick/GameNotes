import React from "react";
import { View, Text } from "react-native";
import { NaviRouteScreenNavigationProps } from "../types";
import GamePlatformList from "./GamePlatformList";

type Props = {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
  };

const FreeGamePageSection = (props: Props) => {
    return (
        <View>
            <GamePlatformList props={props.navigation}/>
        </View>
    )
}

export default FreeGamePageSection;