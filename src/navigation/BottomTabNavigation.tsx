import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Pages/Home";
import DataPage from "../Pages/DataPage";
import ProfilePage from "../Pages/ProfilePage";
import { TabParamList } from "../types";


const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabNavigation = () => {
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
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Data" component={DataPage} />
            <Tab.Screen name="Profile" component={ProfilePage} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigation;