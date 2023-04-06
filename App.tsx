import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import FreeGamePage from './src/Pages/FreeGamePage';
import Home from './src/Pages/Home';
import LoginPage from './src/Pages/LoginPage';
import SignUpPage from './src/Pages/SignUpPage';
import { RootStackParamList } from './src/types';
import GameInfoPage from './src/Pages/GameInfoPage';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        animation: 'slide_from_right',
        headerStyle: { backgroundColor: '#5EA2E5' },
        headerTitleStyle: { color: 'white' },
      }}>
        <Stack.Screen name="TabScreen" component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignUpPage} options={{ headerShown: false }} />
        <Stack.Screen name="FreeGame" component={FreeGamePage} />
        <Stack.Screen name="GameInfo" component={GameInfoPage} options={{
          headerStyle: { backgroundColor: '#f4f4f9' },
          headerTitleStyle: { color: 'black' },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default App;
