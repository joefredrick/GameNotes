import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const Header = () => {
    return (
        <>
            <StatusBar />
            <View style={styles.container}>
                <Text style={styles.headerText}>Game Notes</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 15,  
        backgroundColor: '#f4f4f9',   
    },

    headerText: {
        color: 'black',
        marginTop: 10,
        fontSize: 32,
        fontWeight: 'bold',
    },
});

export default Header;