import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {NaviRouteScreenNavigationProps} from '../types';

type Props = {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
};

const GameInfoPageSection = (props: Props) => {
    return (
        <View>
            <Text>asdf</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d4e3ea",
    },
});

export default GameInfoPageSection;