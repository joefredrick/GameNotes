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
        height: HEIGHT/4,
        width: WIDTH/1.9, 
    },
    container:{
        display:"flex",
        height: HEIGHT/2.5,
        width: WIDTH,
        alignItems: "center",
        justifyContent:"center",
        // backgroundColor: '#c4e0fdda',
        
    },
    name:{
        color: "#3265C8",
        // fontFamily: "sans-serif-medium",
        fontSize: 28,
        fontWeight: "bold",
    }
})

export default HomeContainer