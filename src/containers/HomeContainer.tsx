import React, { useEffect, useState } from "react";
import {Image, StyleSheet, Dimensions, View, Text} from 'react-native'


const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const HomeContainer = () => {
    return( 
        <View style={styles.container}>
            <Image source={require("../assets/joystick_home.png")} style={styles.img}></Image>
            <Text style={styles.name}>Welcome Black Talons</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    img:{
        height: HEIGHT/2.5,
        width: WIDTH/1.18,    
    },
    container:{
        display:"flex",
        height: HEIGHT/2,
        width: WIDTH,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: '#a5e4f1',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 6.68,
        elevation: 7,
    },
    name:{
        color: "white",
        fontFamily: "sans-serif-medium",
        fontSize: 28,
        fontWeight: "bold"
    }
})

export default HomeContainer