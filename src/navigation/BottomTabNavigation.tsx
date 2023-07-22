import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Pages/Home";
import ProfilePage from "../Pages/ProfilePage";
import { TabParamList } from "../types";
import useColorScheme from "../hooks/useColorScheme";
import HomeIcon from '../assets/home.svg';
import GameIcon from '../assets/games.svg';
import ProfileIcon from '../assets/user.svg';
import Colors from "../constants/Colors";
import FreeGamePage from "../Pages/FreeGamePage";
import DemoPage from "../Pages/DemoPage";

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabNavigation = () => {

    const colorScheme = useColorScheme();

    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme].tint,
            tabBarLabelStyle: { fontSize: 10, fontFamily: 'OpenSans-Regular'},
            tabBarStyle: {
                padding: 5,
                height: 50, 
                bottom: 10,
                right: 10,
                left: 10,
                position: 'absolute',
                borderRadius: 10,
                backgroundColor: '#f4f4f9'}
        }}>
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerStyle: {backgroundColor: '#f4f4f9'},
                    headerShown: false,
                    tabBarIcon: ({color}) => <HomeIcon fill={color} height={25} width={25}/>,
                }} 
                />
            <Tab.Screen name="FreeGames" component={FreeGamePage}
                options={{
                    headerStyle: {backgroundColor: '#f4f4f9'},
                    headerShown: false,
                    tabBarIcon: ({color}) => <GameIcon fill={color} height={30} width={30}/>,
                }} 
                />
            <Tab.Screen name="Profile" component={DemoPage} 
                options={{
                    headerStyle: {backgroundColor: '#f4f4f9'},
                    headerShown: false,
                    tabBarIcon: ({color}) => <ProfileIcon fill={color} height={25} width={25}/>,
                }} 
                />
        </Tab.Navigator>
    );
}

export default BottomTabNavigation;