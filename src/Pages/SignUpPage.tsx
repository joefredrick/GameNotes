import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../Components/headers/Header";
import SignUpPageSection from "../containers/SignUpPageSection";
import { NaviRouteScreenNavigationProps } from '../types';


interface SignupPageProps {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
}

const SignUpPage: React.FunctionComponent<SignupPageProps> = (
    { navigation }
) => {
    return (
        <View>
            {/* <Header /> */}
            <SignUpPageSection navigation={navigation}></SignUpPageSection>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default SignUpPage;