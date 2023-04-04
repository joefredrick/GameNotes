import React, { useEffect, useState } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NaviRouteScreenNavigationProps } from '../types';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

type Props = {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
}

const FreeGamePageSection = (props: Props) => {

    const [currentData, setCurrentData] = useState<any[]>([]);
    const [upcomingData, setUpcomingData] = useState<any[]>([]);
 
    const FetchData = () => {
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        };
        
        fetch('https://gamenotes-b30b3-default-rtdb.firebaseio.com/freeGames/-NS9WAkpjOJdISnT5I-w/freeGames.json', options)
            .then(response => response.json())
            .then(response => {
                setCurrentData(response.current)
                setUpcomingData(response.upcoming)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        FetchData();
    }, [])
    console.log('2023-04-06T15:00:00.000Z')
    var date = new Date('2023-04-06T15:00:00.000Z');
    console.log(date.toLocaleString());
    // console.log(date.toLocaleDateString());
    // console.log(date.toLocaleTimeString());
    // console.log(currentData[0].promotions.promotionalOffers[0].promotionalOffers[0].endDate)
    return (    
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView style={styles.cards}>
                    <Text style={styles.text}>Current Games</Text>
                    {currentData && 
                        currentData.map((item: any, index: any) => {
                            let endDate = new Date(currentData[index].promotions.promotionalOffers[0].promotionalOffers[0].endDate)
                            return (
                                <View style={styles.currentCard} key={index}>
                                    <View style={styles.cardImage}>
                                        <View style={{height: "80%", width: "80%"}}>
                                            <Image source={{uri: item.keyImages[1].url}} style={styles.imageStyle}/>
                                        </View>
                                    </View>
                                    <View style={styles.cardContent}>
                                        <Text style={styles.gameTitle}>{item.title}</Text>
                                        <Text style={{fontSize: 16,}}>{item.offerType}</Text>
                                        <Text style={{fontSize: 16, }}>Free Until - {endDate.toLocaleString()}</Text>
                                        <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                            <View style={{height:30, width: 50, borderRadius:15,display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8db5ddd7'}}>
                                                <Text>-100%</Text>
                                            </View>
                                            <Text style={{textDecorationLine: 'line-through', paddingLeft: 10,}}>{'\u20B9'} {item.price.totalPrice.discount}</Text>
                                            <Text style={{ paddingLeft: 10,}}>{'\u20B9'} {item.price.totalPrice.discountPrice}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                    <Text style={styles.text}>Upcoming Games</Text>
                    {upcomingData && 
                        upcomingData.map((item: any, index: any) => {
                            console.log(upcomingData[index].promotions.upcomingPromotionalOffers[0].promotionalOffers[0].endDate)
                            let startDate = new Date(upcomingData[index].promotions.upcomingPromotionalOffers[0].promotionalOffers[0].startDate)
                            let endDate = new Date(upcomingData[index].promotions.upcomingPromotionalOffers[0].promotionalOffers[0].endDate)
                            return (
                                <View style={styles.currentCard} key={index}>
                                    <View style={styles.cardImage}>
                                        <View style={{height: "80%", width: "80%"}}>
                                            <Image source={{uri: item.keyImages[0].url}} style={styles.imageStyle}/>
                                        </View>
                                    </View>
                                    <View style={styles.cardContent}>
                                        <Text style={styles.gameTitle}>{item.title}</Text>
                                        <Text>{item.offerType}</Text>
                                        <Text>Claimable at</Text>
                                        <Text>{startDate.toLocaleString()} - {endDate.toLocaleString()}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f9',
        height: HEIGHT/1.3,
        width: WIDTH,
        margin: 10,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',
    },
    currentCard: {
        height: HEIGHT/2.7,
        width: WIDTH/1.11,
        margin: 10,
        elevation: 5,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        display: 'flex',
        flexDirection: 'row',
    },
    cardImage: {
        width: "50%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        height: "100%", 
        width: "100%", 
        borderBottomLeftRadius:20, 
        borderTopRightRadius:20,
    },
    cardContent: {
        width: "50%",
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    gameTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default FreeGamePageSection;