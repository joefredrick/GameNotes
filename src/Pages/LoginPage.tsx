import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../Components/headers/Header";
import LoginPageSection from "../containers/LoginPageSection";
import { NaviRouteScreenNavigationProps } from "../types";

interface LoginPageProps {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
}

const LoginPage: React.FunctionComponent<LoginPageProps> = (
    { navigation }
) => {
    return (
        <View>
            {/* <Header /> */}
            <LoginPageSection navigation={navigation}></LoginPageSection>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default LoginPage;