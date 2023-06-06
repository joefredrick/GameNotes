import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Dimensions, View, Text } from 'react-native'

import { getAuth } from "firebase/auth";
import app from '../config/firebase';

import { doc, getDoc, getFirestore } from "firebase/firestore";
const db = getFirestore(app);

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;



const HomeContainer = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const getUserData:any = () => {
            const userId = getAuth(app).currentUser?.uid || "";
            const docRef = doc(db, "users", userId);
            getDoc(docRef).then((res) => {
                const data = res.data()
                const UserName = data?.["UserName"]
                setUserName(UserName)
            });
        }
        getUserData();
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require("../assets/joystick_home.png")} style={styles.img}></Image>
            <Text style={styles.name}>Welcome {userName}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    img: {
        height: HEIGHT / 4,
        width: WIDTH / 1.9,
    },
    container: {
        display: "flex",
        height: HEIGHT / 2.5,
        width: WIDTH,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: '#c4e0fdda',

    },
    name: {
        color: "#3265C8",
        // fontFamily: "sans-serif-medium",
        fontSize: 28,
        fontWeight: "bold",
    }
})

export default HomeContainer