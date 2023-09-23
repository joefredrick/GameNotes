import React, { useCallback, useEffect, useState } from 'react';
import { View, Button, StyleSheet, Dimensions, Image, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NaviRouteScreenNavigationProps } from '../types';
import DataContext from '../store/dataContext';
import { Neomorph, Shadow } from 'react-native-neomorph-shadows';
import EditIcon from '../assets/edit-profile.svg';

import app from '../config/firebase';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useFocusEffect } from '@react-navigation/native';
const db = getFirestore(app);

type Props = {
  navigation: NaviRouteScreenNavigationProps<'Login'>;
};

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const ProfilePageSection = (props: Props) => {

  const { signOut } = React.useContext(DataContext);
  const [userID, setuserID] = useState("");
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [imageUrl, setImageUrl] = useState(undefined);
  const [hasImage, setHasImage] = useState(false);

  const signedOut = async () => {
    await AsyncStorage.removeItem('user');
    signOut();
  }
  
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
          setUserName(data?.["UserName"])
          setEmail(data?.["email"])
          if(data?.["imageUrl"]){
            setHasImage(true);
            setImageUrl(data?.["imageUrl"])
          }
          console.log("URL:",imageUrl)
      });
      
  }

  useEffect(()=>{
    if(userID){
      getUserData()
  }
  },[userID])

  const profileImageUpdate = (imageurl: any) => {
    setImageUrl(imageurl);
    setHasImage(true);
    console.log("image received", imageurl);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.profileCard}>
          <View style={styles.profileImage}>
            <Neomorph inner style={styles.profileImageOuter}>
              <View style={styles.profileImageInner}>
                <Image 
                  source={
                    hasImage === false
                    ? require("../assets/UserDefault.png") 
                    : {uri: imageUrl}}
                  style={styles.img}
                />
              </View>
            </Neomorph>
            <View style={styles.buttonArea}>
              <TouchableOpacity 
                onPress={() => 
                  {props.navigation.navigate('EditProfile',{
                    update: profileImageUpdate,
                  })}}>
                <Neomorph style={styles.editButton}>
                  <EditIcon fill={'#91A1BD'} height={25} width={25}/>
                </Neomorph>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.detailsSection}>
            <Neomorph style={styles.detailsCard}>
              <Text style={styles.usernameText}>{userName}</Text>
              <Text style={styles.emailText}>{email}</Text>
              <TouchableOpacity onPress={signedOut}>
                <Neomorph style={styles.signoutButton}>
                  <Text style={styles.signOutText}>Sign Out</Text>
                </Neomorph>
              </TouchableOpacity>
            </Neomorph>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  profileCard: {
    width: WIDTH,
    alignItems: 'center',
  },
  profileImage: {
    // paddingLeft: '15%',
  },
  profileImageOuter: {
    borderRadius: 100,
    shadowRadius: 4,
    backgroundColor: '#DEE9FD',
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageInner: {
    backgroundColor: '#DEE9FD',
    height: 120,
    width: 120,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#CCDEFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 110,
    width: 110,
    borderRadius: 100,
  },
  buttonArea: {
    position: 'absolute',
    marginTop: '20%',
    alignItems: 'center',
    marginLeft: '45%',
  },
  editButton: {
    height: 50,
    width: 50,
    shadowRadius: 10,
    backgroundColor: '#DEE9FD',
    borderRadius: 100,
    borderWidth: 0.35,
    borderColor: '#91A1BD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsSection: {
    height: HEIGHT / 2.1,
    width: WIDTH,
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    zIndex: -1,
    paddingTop: '20%',
  },
  detailsCard: {
    shadowRadius: 10,
    display: 'flex',
    marginTop: 15,
    backgroundColor: '#DEE9FD',
    height: HEIGHT / 2.5,
    width: WIDTH / 1.2,
    borderRadius: 10,
    borderWidth: 0.35,
    borderColor: '#91A1BD',
    alignItems: 'center',
    flexDirection: 'column',
  },
  usernameText: {
    fontSize: 22,
    color: '#6C7A93',
    fontFamily: 'OpenSans-Bold',
    marginTop: 80,
  },
  emailText: {
    fontSize: 16,
    color: '#6C7A93',
    fontFamily: 'OpenSans-Regular',
    marginTop: 20,
  },
  signoutButton: {
    height: 40,
    width: 150,
    shadowRadius: 10,
    marginTop: 20,
    backgroundColor: '#DEE9FD',
    borderRadius: 10,
    borderWidth: 0.35,
    borderColor: '#91A1BD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutText: {
    fontSize: 18,
    color: '#6C7A93',
    fontFamily: 'OpenSans-SemiBold'
  },
})

export default ProfilePageSection;