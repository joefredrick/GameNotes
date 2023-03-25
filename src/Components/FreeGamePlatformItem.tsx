import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";

const FreeGamePlatformItem = (props: any) => {
    return (
        <View style={styles.container}>
            <Image source={props.item.img} resizeMode={'contain'} style={styles.image}/>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Go to {props.item.name} site</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "white",
        borderRadius:20,
        height: 180,
        width: 150,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    image: {
        flex: 1,
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
        borderRadius:15,
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 7,
    },
    btnTxt:{fontWeight: "bold", fontSize: 16}
    

})

export default FreeGamePlatformItem