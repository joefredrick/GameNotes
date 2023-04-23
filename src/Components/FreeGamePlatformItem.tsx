import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Dimensions } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const FreeGamePlatformItem = (props: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {props.item.prop.navigate(props.item.itemData.link)}}>
            <Image source={props.item.itemData.img} resizeMode={'contain'} style={styles.image}/>
            <View style={styles.footer}>
                    <Text style={styles.btnTxt}>Go to {props.item.itemData.name} site</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius:20,
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
    btn:{
        backgroundColor: "blue",
        borderRadius:10,
        padding:3,
    },
    btnTxt:{fontWeight: "bold", fontSize: 18, color: "black"}
    

})

export default FreeGamePlatformItem