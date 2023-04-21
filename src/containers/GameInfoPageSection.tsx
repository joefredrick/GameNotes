import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import {NaviRouteScreenNavigationProps} from '../types';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

type Props = {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
    data: any;
};

const GameInfoPageSection = (props: Props) => {
    const GameInfo = props.data.data;
    // let endDate = new Date(
    //     GameInfo.promotions.promotionalOffers[0].promotionalOffers[0].endDate,
    //   );
    let releaseDate = new Date(
        GameInfo.effectiveDate
    );
    console.log(props)
    const FinalDate = props.data.gameDate;
    let upcoming = props.data.upcoming;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.card}>
                    <Image source={{uri: GameInfo.keyImages[0].url}} style={styles.img} />
                </View>
            </View>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>{GameInfo.title}</Text>
                <View style={styles.offerStyleBox}>
                    <Text style={styles.offerStyle}>{GameInfo.offerType}</Text>
                </View>
                {upcoming? <></> :<View
                    style={{flexDirection: 'row', alignSelf: 'center', alignItems: 'center', marginBottom: 10,}}>
                    <View
                    style={{
                        height: 30,
                        width: 50,
                        borderRadius: 15,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#0078f2',
                    }}>
                    <Text style={{color: 'white'}}>-100%</Text>
                    </View>
                    <Text
                    style={{
                        textDecorationLine: 'line-through',
                        paddingLeft: 10,
                        color: 'black',
                    }}>
                    {'\u20B9'} {GameInfo.price.totalPrice.discount}
                    </Text>
                    <Text style={{paddingLeft: 10, color: 'black'}}>
                    {'\u20B9'} {GameInfo.price.totalPrice.discountPrice}
                    </Text>
                </View>}
                {upcoming? 
                <Text style={{fontSize: 16, color: 'black', alignSelf: 'center', marginBottom: 10}}>
                    Sale Starts at {FinalDate.toLocaleString()}
                </Text>
                :<Text style={{fontSize: 16, color: 'black', alignSelf: 'center', marginBottom: 10}}>
                    Sale Ends at {FinalDate.toLocaleString()}
                </Text>}
                <TouchableOpacity
                style={styles.redeemButton}
                onPress={() => {Linking.openURL(GameInfo.RedeemLink)}}>
                <Text style={styles.redeemText}>Go To Page</Text>
                </TouchableOpacity>
                <ScrollView>
                <View style={{flexDirection: 'row', margin:10, justifyContent:"space-between"}}>
                    <Text style={{fontSize: 16, color: '#808080'}}>Developer</Text>
                    <Text style={{fontSize: 16, color: 'black'}}>{GameInfo.customAttributes[1].value}</Text>
                </View>
                <View style={{borderBottomWidth: 0.5, width: '100%',}}></View>
                <View style={{flexDirection: 'row', margin:10, justifyContent:"space-between"}}>
                    <Text style={{fontSize: 16, color: '#808080'}}>Publisher</Text>
                    <Text style={{fontSize: 16, color: 'black'}}>{GameInfo.customAttributes[0].value}</Text>
                </View>
                <View style={{borderBottomWidth: 0.5, width: '100%',}}></View>
                <View style={{flexDirection: 'row', margin:10, justifyContent:"space-between"}}>
                    <Text style={{fontSize: 16, color: '#808080'}}>Release Date</Text>
                    <Text style={{fontSize: 16, color: 'black'}}>{releaseDate.toLocaleDateString()}</Text>
                </View>
                <View style={{borderBottomWidth: 0.5, width: '100%'}}></View>
                <View style={{flexDirection: 'column', margin:10, justifyContent:"space-between"}}>
                    <Text style={{fontSize: 16, color: '#808080'}}>Description</Text>
                    <Text style={{fontSize: 16, color: 'black', padding: 5}}>{GameInfo.description}</Text>
                </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#d4e3ea",
        width: WIDTH,
        height: HEIGHT,
        display: "flex",
        flexDirection:"column"
    },
    imageContainer: {
        width: WIDTH,
        height: HEIGHT/3.5,
        backgroundColor: "lightblue",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    img:{
        height: "100%",
        width: "auto",
        borderRadius: 20,
    },
    card:{
        display:"flex",
        margin: 15,
        justifyContent: "center",
        
    },
    mainContainer: {
        margin: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 32,
        color: 'black',
        marginLeft: 10,
        marginBottom: 5,
        // textAlign: "center"
    },
    offerStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
    },
    offerStyleBox:{
        height: 30,
        width: 100,
        borderRadius: 15,
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'black',
        marginBottom: 10,
    },
    redeemButton: {
        height: 50,
        width: 150,
        backgroundColor: '#59BF40',
        borderRadius: 50,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    redeemText: {
        display: 'flex',
        textAlign: 'center',
        fontSize: 18,
        color: '#f4f4f9',
        fontWeight: 'bold',
    },
});

export default GameInfoPageSection;