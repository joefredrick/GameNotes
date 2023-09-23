import React from "react";
import { Text, StyleSheet, View  } from "react-native";
import { NaviRouteScreenNavigationProps } from '../types';
import EditProfilePageSection from "../containers/EditProfilePageSection";

interface EditProfilePageProps {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
    route: any;
}

const EditProfilePage:React.FunctionComponent<EditProfilePageProps>  = props => {
    return(
        <View style={styles.container}>
            <EditProfilePageSection 
                navigation={props.navigation}
                data={props.route.params}
            />
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