import React, { useState } from 'react';
import { View, Button, StyleSheet, Dimensions, Image, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NaviRouteScreenNavigationProps } from '../types';
import DataContext from '../store/dataContext';
import { Neomorph, Shadow } from 'react-native-neomorph-shadows';

type Props = {
  navigation: NaviRouteScreenNavigationProps<'Login'>;
};

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const ProfilePageSection = (props: Props) => {

  const [user, setUser] = useState({ userName: "AdminName", age: "23", userEmail: "admin@gmail.com" })
  const [edit, toggleEdit] = useState(false);
  const { signOut } = React.useContext(DataContext);

  const toggle = () =>{
    toggleEdit(state => !state)
  }

  const signedOut = async () => {
    await AsyncStorage.removeItem('user');
    signOut();
  }

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
      <Neomorph  style={styles.neomorph}>
        <View style={styles.header}>
          <Text style={styles.MainTitle}>PROFILE</Text>
          <TouchableOpacity style={styles.btn} onPress={toggle}>
            <Neomorph inner style={styles.neomorph6}>
              <Image source={require("../assets/EditIcon.png")} style={styles.icn}></Image>
            </Neomorph>
          </TouchableOpacity>
        </View>
      </Neomorph>
      <Shadow useArt style={styles.shadow1}>
        <View style={styles.contain}>
          <View style={styles.photo}>
            <Neomorph inner style={styles.neomorph7}>
              <Neomorph style={styles.neomorph8}>
                <Image source={require("../assets/UserDefault.png")} style={styles.img}></Image>
              </Neomorph>
            </Neomorph>
          </View>
          <View>
              <View style={styles.detailContainer}>
                <Neomorph inner style={styles.neomorph5}>
                  <Text style={styles.title}>User Name: </Text>
                  <TextInput style={edit? styles.ansEdit: styles.ansNonEdit} placeholder={"Username"} value={user.userName} editable={edit}
                    onChangeText={(text)=>{setUser({...user, userName: text})}}/>
                </Neomorph>
              </View>

              <View style={styles.detailContainer}>
                <Neomorph inner style={styles.neomorph5}>
                  <Text style={styles.title}>Age </Text>
                  <TextInput style={edit? styles.ansEdit: styles.ansNonEdit} placeholder={"Age"} value={user.age} editable={edit}
                    onChangeText={(text)=>{setUser({...user, age: text})}}/>
                </Neomorph>
              </View>

              <View style={styles.detailContainer}>
                <Neomorph inner style={styles.neomorph5}>
                  <Text style={styles.title}>User Email: </Text>
                  <Text style={styles.ansNonEdit}>{user.userEmail}</Text>
                </Neomorph>
              </View>

              <View style={styles.button}>
                <Button title='SignOut' onPress={signedOut} />
              </View>
          </View>
        </View>
      </Shadow>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    padding: 15,
    height: "88%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    paddingTop:5
  },
  btn: {
    height: 35,
    width: 35,
    margin: 5,
  },
  MainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 6,
  },
  ans: {
    textAlign: "center",
  },
  ansEdit:{
    textDecorationLine: "underline",
    color: "black",
    fontStyle:"italic",
    textAlign: 'center',
    padding: 0
  },
  ansNonEdit:{
    fontStyle: "normal",
    textAlign: 'center',
    fontSize: 14,
    color:"grey",
    padding: 0
  },
  contain: {
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  img: {
    height: 140,
    width: 140,
  },
  icn: {
    height: 25,
    width: 25,
    alignSelf: "center",
  },
  detailContainer: {
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  shadow1: {
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 20,
    backgroundColor: '#d4e3ea',
    width: WIDTH / 1.14,
    height: HEIGHT / 1.25,
  },
  button: {
    width: 100,
    height: 100,
    alignSelf: "center",
    justifyContent: "center"
  },
  neomorph: {
    borderRadius: 20,
    shadowRadius: 8,
    backgroundColor: '#d4e3ea',
    width: WIDTH/1.19,
    height: 70,
    margin:25,
  },
  neomorph4: {
    borderRadius: 20,
    shadowRadius: 8,
    backgroundColor: '#d4e3ea',
    width: 300,
    height: HEIGHT / 1.25 - 250,
  },
  neomorph5: {
    borderRadius: 20,
    shadowRadius: 8,
    backgroundColor: '#d4e3ea',
    width: 220,
    height: 60,
  },
  neomorph6: {
    borderRadius: 20,
    shadowRadius: 8,
    backgroundColor: '#d4e3ea',
    height: 45,
    width: 45,
    paddingTop: 10,
  },
  photo: {
    height: 220,
  },
  neomorph7: {
    borderRadius: 100,
    shadowRadius: 12,
    backgroundColor: '#d4e3ea',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  neomorph8: {
    borderRadius: 70,
    shadowRadius: 12,
    backgroundColor: '#d4e3ea',
    width: 140,
    height: 140,
  },
})

export default ProfilePageSection;