import React from "react";
import { Text, StyleSheet, View  } from "react-native";
import { NaviRouteScreenNavigationProps } from '../types';
import ProfilePageSection from "../containers/ProfilePageSection";

interface ProfilePageProps {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
}

const ProfilePage:React.FunctionComponent<ProfilePageProps>  = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Profile Page</Text>
            <ProfilePageSection navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d4e3ea",
        height:"100%"
    },
});

export default ProfilePage;