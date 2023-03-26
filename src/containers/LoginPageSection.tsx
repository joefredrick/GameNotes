import React from "react";
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { NaviRouteScreenNavigationProps } from '../types';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

type Props = {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
}
const LoginPageSection = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.backdropContainer}>
                <View style={styles.bigBackDrop}></View>
                <View style={styles.smallBackDrop}></View>
            </View>
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.loginSection}>
                <View style={styles.loginCard}>
                    <TextInput style={styles.input} placeholder={'Username'} />
                    <TextInput style={styles.input} placeholder={'Password'} />
                    <TouchableOpacity style={styles.submitButton} onPress={() => props.navigation.navigate('TabScreen')}>
                        <Text style={styles.submitText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.signupSection}>
                        <Text style={styles.newbieText}>Newbie?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signupText} onPress={() => props.navigation.navigate('Signup')}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.bottomBackdropContainer}>
                <View style={styles.bottomSmallBackDrop}></View>
                <View style={styles.bottomBigBackDrop}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f9',
        height: HEIGHT,
        width: WIDTH,
    },
    backdropContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
    },
    bigBackDrop: {
        height: HEIGHT/4,
        width: WIDTH/2,
        backgroundColor: '#8db5ddd7',
        borderRadius: 100,
        marginRight: WIDTH/1.7,
        marginLeft: -WIDTH/3.2,
    },
    smallBackDrop: {
        height: HEIGHT/8,
        width: WIDTH/4,
        backgroundColor: '#8db5ddd7',
        borderRadius: 100,
    },
    loginSection: {
        height: HEIGHT/2.1,
        width: WIDTH,
        display: 'flex',
        alignItems: 'center',
    },
    loginText: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    loginCard: {
        display: 'flex',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5EA2E5',
        height: HEIGHT/2.2,
        width: WIDTH/1.1,
        borderRadius: 20,
    },
    input: {
        height: 50,
        width: 270,
        paddingLeft: 30,
        paddingVertical: 15,
        backgroundColor: '#f4f4f9',
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    submitButton: {
        height: 50,
        width: 150,
        backgroundColor: '#3E79BA',
        borderRadius: 50,
        justifyContent: 'center',
    },
    submitText: {
        display: 'flex',
        textAlign: 'center',
        fontSize: 18,
        color: '#f4f4f9',
        fontWeight: 'bold',
    },
    signupSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    newbieText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f4f4f9',
    },
    signupText: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: '#3265C8',
        marginLeft: 5,
        fontWeight: 'bold',
    },
    bottomBackdropContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomSmallBackDrop: {
        height: HEIGHT/8,
        width: WIDTH/4,
        backgroundColor: '#8db5ddd7',
        borderRadius: 100,
        marginRight: WIDTH/2,
        marginLeft: -WIDTH/8,
    },
    bottomBigBackDrop: {
        height: HEIGHT/4,
        width: WIDTH/2,
        backgroundColor: '#8db5ddd7',
        borderRadius: 100,
    },
});

export default LoginPageSection;