import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import {NaviRouteScreenNavigationProps} from '../types';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

type Props = {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
    data: any;
};

const GameInfoPageSection = (props: Props) => {
    const GameInfo = props.data.data;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.card}>
                <Image source={{uri: GameInfo.keyImages[0].url}} style={styles.img} />
                </View>
            </View>
            <Text>{GameInfo.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d4e3ea",
        width: WIDTH,
        height: HEIGHT,
        display: "flex",
        flexDirection:"column"
    },
    imageContainer: {
        width: WIDTH,
        height: HEIGHT/3.5,
        backgroundColor: "white",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    img:{
        height: "100%",
        width: "auto",
        borderRadius: 20,
    },
    card:{
        display:"flex",
        margin: 15,
        justifyContent: "center",
        
    },
});

export default GameInfoPageSection;