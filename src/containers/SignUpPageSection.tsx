import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NaviRouteScreenNavigationProps} from '../types';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../config/firebase';
import { Neomorph, Shadow } from "react-native-neomorph-shadows";

import { getFirestore, doc, addDoc, setDoc, collection } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetFCMToken } from '../utils/pushnotification_helper';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const auth = getAuth(app);
const db = getFirestore(app);

type Props = {
  navigation: NaviRouteScreenNavigationProps<'Home'>;
};

const SignUpPageSection = (props: Props) => {

  const getToken = async () => {
    const fcmToken = await AsyncStorage.getItem('fcmtoken');
    if(fcmToken == null){
      const parsedToken = [];
    }
    else {  
      const parsedToken = fcmToken;
      setValue({ ...value, token: parsedToken });
    }
  }

  useEffect(() => {
    getToken();
  }, [])

  const [value, setValue] = useState({
    displayname: '',
    email: '',
    password: '',
    error: '',
    token: '',
  })

  async function signUp() {

    if (value.email === '' || value.password === '' || value.displayname === '') {
      setValue({
        ...value,
        error: 'UserName, Email and password are mandatory.'
      })
      alert('UserName, Email and password are mandatory.');
      return;
    }

    try {
      createUserWithEmailAndPassword(auth, value.email, value.password).then(()=>{
        console.log("User Created");
        const userId = auth.currentUser?.uid || ""
        setDoc(doc(db, "users", userId), {
          UserName:  value.displayname,
          email: value.email,
          FCM_Token: value.token,
        }
        )
        console.log("User Data Saved");
      });
      props.navigation.navigate('Login')
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
      alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Game Notes</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.backdropContainer}>
          <View style={styles.big_BG_Drop}>
            <Neomorph
              style={styles.big_BG_DropBorder}
            >
              <Neomorph
                inner
                style={styles.big_BG_InnerColor}
              >
                <Neomorph
                  style={styles.big_BG_InnerBorder}
                />
              </Neomorph>
            </Neomorph>
          </View>
          <View>
            <Neomorph
              style={styles.small_BG_DropBorder}
            >
              <Neomorph
                inner
                style={styles.small_BG_InnerColor}
              >
                <Neomorph
                  style={styles.small_BG_InnerBorder}
                />
              </Neomorph>
            </Neomorph>
          </View>
        </View>
        <Text style={styles.loginText}>Signup</Text>
        <View style={styles.loginSection}>
          <Neomorph style={styles.loginCard}>
            <View style={{ flexDirection: 'column', margin: 30, }}>
              <Shadow
                inner
                style={styles.input}
              >
                <TextInput 
                  placeholder={'Username'} 
                  value={value.displayname}
                  onChangeText={(text) => setValue({ ...value, displayname: text })}
                />
              </Shadow>
              <Shadow
                inner
                style={styles.input}
              >
                <TextInput 
                  placeholder={'Email'} 
                  value={value.email}
                  onChangeText={(text) => setValue({ ...value, email: text })}
                  />
              </Shadow>
              <Shadow
                inner
                style={styles.input}
              >
                <TextInput 
                  placeholder={'Password'} 
                  value={value.password}
                  secureTextEntry={true}
                  onChangeText={(text) => setValue({ ...value, password: text })}
                  />
              </Shadow>
              <TouchableOpacity 
                style={{ paddingTop: 20, alignItems: 'center' }}
                onPress={signUp}>
                <Neomorph style={styles.submitButton}>
                  <Text style={styles.submitText}>Signup</Text>
                </Neomorph>
              </TouchableOpacity>
            </View>
          </Neomorph>
        </View>
        <View style={styles.bottomBackdropContainer}>
          <View style={styles.bottomSmallBG}>
            <Neomorph
              style={styles.small_BG_DropBorder}
            >
              <Neomorph
                inner
                style={styles.small_BG_InnerColor}
              >
                <Neomorph
                  style={styles.small_BG_InnerBorder}
                />
              </Neomorph>
            </Neomorph>
          </View>
          <View style={styles.bottomBigBG}>
            <Neomorph
              style={styles.big_BG_DropBorder}
            >
              <Neomorph
                inner
                style={styles.big_BG_InnerColor}
              >
                <Neomorph
                  style={styles.big_BG_InnerBorder}
                />
              </Neomorph>
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
  },
  backdropContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
  },
  big_BG_Drop: {
    marginRight: WIDTH / 1.7,
    marginLeft: -WIDTH / 3.2,
  },
  loginText: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: 25,
    color: '#6C7A93',
    fontFamily: 'OpenSans-Bold',
  },
  loginSection: {
    height: HEIGHT / 2.1,
    width: WIDTH,
    display: 'flex',
    alignItems: 'center',
  },
  loginCard: {
    shadowRadius: 10,
    display: 'flex',
    marginTop: 15,
    backgroundColor: '#DEE9FD',
    height: HEIGHT / 2.5,
    width: WIDTH / 1.1,
    borderRadius: 10,
    borderWidth: 0.35,
    borderColor: '#91A1BD',
  },
  input: {
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowColor: '#91A1BD',
    shadowRadius: 10,
    borderRadius: 5,
    backgroundColor: '#DEE9FD',
    width: 265,
    height: 40,
    marginTop: 10,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  submitButton: {
    height: 40,
    width: 150,
    shadowRadius: 10,
    backgroundColor: '#DEE9FD',
    borderRadius: 10,
    borderWidth: 0.35,
    borderColor: '#91A1BD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontSize: 18,
    color: '#6C7A93',
    fontFamily: 'OpenSans-SemiBold'
  },
  signupSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  newbieText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C7A93',
    fontFamily: 'OpenSans-Bold'
  },
  signupText: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#3265C8',
    marginLeft: 5,
    fontFamily: 'OpenSans-Bold'
  },
  bottomBackdropContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  big_BG_DropBorder: {
    shadowRadius: 3,
    borderRadius: 100,
    backgroundColor: '#DEE9FD',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  big_BG_InnerColor: {
    shadowRadius: 7,
    borderRadius: 90,
    opacity: 0.4,
    backgroundColor: '#91A1BD',
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  big_BG_InnerBorder: {
    shadowRadius: 7,
    borderRadius: 50,
    backgroundColor: '#DEE9FD',
    width: 100,
    height: 100,
  },
  bottomBigBG: {
    height: HEIGHT / 4,
    width: WIDTH / 2,
  },
  small_BG_DropBorder: {
    shadowRadius: 3,
    borderRadius: 100,
    backgroundColor: '#DEE9FD',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  small_BG_InnerColor: {
    shadowRadius: 7,
    borderRadius: 90,
    opacity: 0.4,
    backgroundColor: '#91A1BD',
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  small_BG_InnerBorder: {
    shadowRadius: 7,
    borderRadius: 50,
    backgroundColor: '#DEE9FD',
    width: 50,
    height: 50,
  },
  bottomSmallBG: {
    marginRight: WIDTH / 2,
    marginLeft: -WIDTH / 8,
  },
})

export default SignUpPageSection;
