import React from 'react';
import { View, Text, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NaviRouteScreenNavigationProps } from '../types';

type Props = {
    navigation: NaviRouteScreenNavigationProps<'Login'>;
  };

export const ProfilePageSection = (props: Props) => {

  const signOut = async() => {
    await AsyncStorage.removeItem('user');
    props.navigation.navigate('App')
  } 

  return (
    <View>
        <Button title='SignOut' color={"blue"} onPress={signOut}/>
    </View>
  )
}

export default ProfilePageSection;