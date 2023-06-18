import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState, useContext } from 'react';
import {
  StyleSheet,
} from 'react-native';
import { RootStackParamList } from './src/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import './src/config/firebase';
import {
  requestUserPermission,
  NotificationListner,
  GetFCMToken,
} from './src/utils/pushnotification_helper';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import Home from './src/Pages/Home';
import FreeGamePage from './src/Pages/FreeGamePage';
import EpicFreeGamePage from './src/Pages/EpicFreeGamePage';
import GameInfoPage from './src/Pages/GameInfoPage';
import LoginPage from './src/Pages/LoginPage';
import SignUpPage from './src/Pages/SignUpPage';
import DataContext from './src/store/dataContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const [hasData, sethasData] = useState<Boolean>(false)

  const getData = async () => {
    const value = await AsyncStorage.getItem('user')
    if (value !== null) {
      console.log(value);
      sethasData(true)
    }
    else {
      sethasData(false)
    }
  }

  useEffect(() => {
    getData();
    requestUserPermission();
    GetFCMToken();
    NotificationListner();
  }, [])

  //For React Context
  const authContext = React.useMemo(
    () => ({
      signIn: async (data: any) => {
        getData();
      },
      signOut: () => {
        sethasData(false);
      }
    }),
    []
  );

  return (
    <DataContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          animation: 'slide_from_right',
          headerStyle: { backgroundColor: '#5EA2E5' },
          headerTitleStyle: { color: 'white' },
        }}>
          {hasData ? (
            <>
              <Stack.Screen name="TabScreen" component={BottomTabNavigation} options={{ headerShown: false }} />
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              <Stack.Screen name="FreeGame" component={FreeGamePage} />
              <Stack.Screen name="EpicGame" component={EpicFreeGamePage} />
              <Stack.Screen name="GameInfo" component={GameInfoPage} options={{
                headerStyle: { backgroundColor: '#f4f4f9' },
                headerTitleStyle: { color: 'black' },
              }} /></>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
              <Stack.Screen name="Signup" component={SignUpPage} options={{ headerShown: false }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </DataContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default App;
