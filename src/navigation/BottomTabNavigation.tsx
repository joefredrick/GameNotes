import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Pages/Home";
import DataPage from "../Pages/DataPage";
import ProfilePage from "../Pages/ProfilePage";
import { TabParamList } from "../types";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeIcon from '../assets/home-fill.svg';
import { SvgUri } from 'react-native-svg';

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabNavigation = () => {

    const colorScheme = useColorScheme();

    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: { position: 'absolute' },
            tabBarActiveBackgroundColor: '#5EA2E5',
            tabBarActiveTintColor: 'white',
            tabBarLabelStyle:{
                fontSize: 16
            },
        }}>
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image source={HomeIcon}/>
                    ),
                }}
                />
            <Tab.Screen name="Data" component={DataPage}
                // options={{
                //     tabBarIcon: ({color}) => <HomeIcon fill={color} />,
                // }} 
                />
            <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigation;