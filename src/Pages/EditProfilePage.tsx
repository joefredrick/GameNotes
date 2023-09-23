import React from "react";
import { Text, StyleSheet, View  } from "react-native";
import { NaviRouteScreenNavigationProps } from '../types';
import EditProfilePageSection from "../containers/EditProfilePageSection";

interface EditProfilePageProps {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
}

const EditProfilePage:React.FunctionComponent<EditProfilePageProps>  = ({navigation}) => {
    return(
        <View style={styles.container}>
            <EditProfilePageSection navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d4e3ea",
        height:"100%"
    },
});

export default EditProfilePage;