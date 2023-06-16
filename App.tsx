import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { RootStackParamList } from './src/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginNavigation from './src/navigation/LoginNavigation';
import AppNavigation from './src/navigation/AppNavigation';

import './src/config/firebase';


import {
  requestUserPermission,
  NotificationListner,
  GetFCMToken,
} from './src/utils/pushnotification_helper';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const [hasData, sethasData] = useState(false)
  useEffect(()=> {
    (async()=> {
      const value = await AsyncStorage.getItem('user')
      if(value !== null){
        sethasData(true)
      }})();
      requestUserPermission();
      GetFCMToken();
      NotificationListner();
    }, [])
  console.log(hasData);

  if(hasData){
    return(
      <AppNavigation />
    );
  }
  else{
    return(
      <LoginNavigation />
    )
  }


}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default App;
