import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Dimensions } from "react-native";
import { Neomorph } from "react-native-neomorph-shadows";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const FreeGamePlatformItem = (props: any) => {
    return (
        <TouchableOpacity onPress={() => {props.item.prop.navigate(props.item.itemData.link)}}>
            <Neomorph  style={styles.container}>
                <Image source={props.item.itemData.img} resizeMode={'contain'} style={styles.image}/>
                <View style={styles.footer}>
                        <Text style={styles.btnTxt}>Go to {props.item.itemData.name} site</Text>
                </View>
            </Neomorph>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DEE9FD",
        shadowRadius: 10,
        borderRadius:20,
        borderWidth: 0.35,
        borderColor: '#91A1BD',
        height: HEIGHT/4,
        width: WIDTH/2.3,
        margin: 10,
        elevation: 5,
    },
    image: {
        justifyContent: 'center',
        height:130,
        width:130
    },
    footer:{
        alignItems: "center",
        justifyContent: "center",
        marginTop:2,
    },
    btnTxt:{
        fontFamily: 'OpenSans-Bold',
        fontSize: 16, 
        color: "#6C7A93",
    }
    

})

export default FreeGamePlatformItem