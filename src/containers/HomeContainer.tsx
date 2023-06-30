import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Dimensions, View, Text } from 'react-native'

import { getAuth } from "firebase/auth";
import app from '../config/firebase';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { doc, getDoc, getFirestore } from "firebase/firestore";
const db = getFirestore(app);

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;



const HomeContainer = () => {
    const [userName, setUserName] = useState();
    const [userID, setuserID] = useState("")
    useEffect(() => {
        (async()=> {
            const value = await AsyncStorage.getItem('user')
            if(value !== null){
              console.log(value);
              setuserID(value)
            }
            else{
                const uid = getAuth(app).currentUser?.uid || "";
                setuserID(uid)
            }
        })();
        
    }, [])

    const getUserData:any = () => {
        const docRef = doc(db, "users", userID);
        getDoc(docRef).then((res) => {
            const data = res.data()
            const UserName = data?.["UserName"]
            setUserName(UserName)
        });
    }

    if(userID){
        getUserData()
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>Home</Text>
            </View>
            <View style={styles.mainContainer}>
                <Image source={require("../assets/joystick_home.png")} style={styles.img}></Image>
                <Text style={styles.welcomeText}>Welcome {userName}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    img: {
        height: HEIGHT / 4,
        width: WIDTH / 1.9,
    },
    container: {
      backgroundColor: "#DEE9FD",
      height: HEIGHT,
      width: WIDTH,
      alignItems: 'center',
    },
    headerSection: {
      width: '100%',
      height: '10%',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#DEE9FD',
    },
    headerText: {
      color: '#91A1BD',
      marginTop: 20,
      fontSize: 26,
      fontFamily: 'MW_Regular',
    },
    mainContainer: {
      height: '90%',
      width: WIDTH, 
      alignItems: 'center',
    },
    welcomeText: {
        paddingTop: 10,
        alignSelf: 'center',
        fontSize: 25,
        color: '#6C7A93',
        fontFamily: 'OpenSans-Bold',
      },
})

export default HomeContainer