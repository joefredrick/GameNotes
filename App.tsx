import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import DataPage from './src/Pages/DataPage';
import Home from './src/Pages/Home';
import LoginPage from './src/Pages/LoginPage';
import SignUpPage from './src/Pages/SignUpPage';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{
        animation: 'slide_from_right',
        headerStyle: { backgroundColor: 'blue' },
        headerTitleStyle: { color: 'white' },
      }}>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Data" component={DataPage} />
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={SignUpPage} options={{headerShown: false}}/>
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
