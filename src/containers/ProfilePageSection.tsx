import React from 'react';
import { View, Text, Button } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NaviRouteScreenNavigationProps } from '../types';
import DataContext from '../store/dataContext';

type Props = {
    navigation: NaviRouteScreenNavigationProps<'Login'>;
  };

export const ProfilePageSection = (props: Props) => {

  const { signOut } = React.useContext(DataContext);

  const signedOut = async() => {
    await AsyncStorage.removeItem('user');
    signOut();
  } 

  return (
    <View>
        <Button title='SignOut' color={"blue"} onPress={signedOut}/>
    </View>
  )
}

export default ProfilePageSection;