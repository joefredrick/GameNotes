import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import {NaviRouteScreenNavigationProps} from '../types';

type Props = {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
    data: any;
};

const GameInfoPageSection = (props: Props) => {
    const GameInfo = props.data.data;
    return (
        <View>
            <Text>{GameInfo.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d4e3ea",
    },
});

export default GameInfoPageSection;