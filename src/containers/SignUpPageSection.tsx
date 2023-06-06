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

import { getFirestore, doc, addDoc, setDoc, collection } from "firebase/firestore";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const auth = getAuth(app);
const db = getFirestore(app);

type Props = {
  navigation: NaviRouteScreenNavigationProps<'Home'>;
};

const SignUpPageSection = (props: Props) => {

  const [value, setValue] = useState({
    displayname: '',
    email: '',
    password: '',
    error: ''
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
      <View style={styles.backdropContainer}>
        <View style={styles.bigBackDrop}></View>
        <View style={styles.smallBackDrop}></View>
      </View>
      <Text style={styles.signupText}>Signup</Text>
      <View style={styles.signupSection}>
        <View style={styles.signupCard}>
          <TextInput 
            style={styles.input} 
            placeholder={'Username'}
            value={value.displayname}
            onChangeText={(text) => setValue({ ...value, displayname: text })}
            />
          <TextInput 
            style={styles.input} 
            placeholder={'Email'} 
            value={value.email}
            onChangeText={(text) => setValue({ ...value, email: text })}
            />
          <TextInput 
            style={styles.input} 
            placeholder={'Password'} 
            value={value.password}
            secureTextEntry={true}
            onChangeText={(text) => setValue({ ...value, password: text })}
            />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={signUp}>
            <Text
              style={styles.submitText}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomBackdropContainer}>
        <View style={styles.bottomSmallBackDrop}></View>
        <View style={styles.bottomBigBackDrop}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f9',
  },
  backdropContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  bigBackDrop: {
    height: HEIGHT / 4,
    width: WIDTH / 2,
    backgroundColor: '#8db5ddd7',
    borderRadius: 100,
    marginRight: WIDTH / 1.7,
    marginLeft: -WIDTH / 3.2,
  },
  smallBackDrop: {
    height: HEIGHT / 8,
    width: WIDTH / 4,
    backgroundColor: '#8db5ddd7',
    borderRadius: 100,
  },
  signupText: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#808080',
  },
  signupSection: {
    height: HEIGHT / 2.1,
    width: WIDTH,
    display: 'flex',
    alignItems: 'center',
  },
  signupCard: {
    display: 'flex',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5EA2E5',
    height: HEIGHT / 2.2,
    width: WIDTH / 1.1,
    borderRadius: 20,
  },
  input: {
    height: 50,
    width: 270,
    paddingLeft: 30,
    paddingVertical: 15,
    backgroundColor: '#f4f4f9',
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#808080',
  },
  submitButton: {
    height: 50,
    width: 150,
    backgroundColor: '#3E79BA',
    borderRadius: 50,
    justifyContent: 'center',
  },
  submitText: {
    display: 'flex',
    textAlign: 'center',
    fontSize: 18,
    color: '#f4f4f9',
    fontWeight: 'bold',
  },
  bottomBackdropContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSmallBackDrop: {
    height: HEIGHT / 8,
    width: WIDTH / 4,
    backgroundColor: '#8db5ddd7',
    borderRadius: 100,
    marginRight: WIDTH / 2,
    marginLeft: -WIDTH / 8,
  },
  bottomBigBackDrop: {
    height: HEIGHT / 4,
    width: WIDTH / 2,
    backgroundColor: '#8db5ddd7',
    borderRadius: 100,
  },
});

export default SignUpPageSection;
