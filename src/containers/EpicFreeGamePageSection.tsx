import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NaviRouteScreenNavigationProps} from '../types';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

type Props = {
  navigation: NaviRouteScreenNavigationProps<'Home'>;
};

const EpicFreeGamePageSection = (props: Props) => {
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

    fetch(
      'https://gamenotes-b30b3-default-rtdb.firebaseio.com/EpicGames/-NTXn02tkjEifiabTHI9/freeGames.json',
      options,
    )
      .then(response => response.json())
      .then(response => {
        setCurrentData(response.current);
        setUpcomingData(response.upcoming);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView style={styles.cards}>
          <Text style={styles.text}>Current Games</Text>
          {currentData &&
            currentData.map((item: any, index: any) => {
              let endDate = new Date(
                currentData[
                  index
                ].promotions.promotionalOffers[0].promotionalOffers[0].endDate,
              );
              return (
                <TouchableOpacity key={index} onPress={() => props.navigation.navigate('GameInfo', {data: item, upcoming: false, gameDate: endDate})}>
                  <View style={styles.currentCard} key={index}>
                    <View style={styles.cardImage}>
                      <View
                        style={{
                          height: '80%',
                          width: '80%',
                          borderBottomLeftRadius: 20,
                          borderTopRightRadius: 20,
                          backgroundColor: '#0078f2',
                        }}>
                        <Image
                          source={{uri: item.keyImages[1].url}}
                          style={styles.currentImageStyle}
                        />
                        <Text
                          style={{
                            display: 'flex',
                            alignSelf: 'center',
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'white',
                            paddingTop: 5,
                          }}>
                          FREE NOW
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cardContent}>
                      <Text style={styles.gameTitle}>{item.title}</Text>
                      <Text style={{fontSize: 16, color: '#808080'}}>
                        {item.offerType}
                      </Text>
                      <Text style={{fontSize: 16, color: 'green', fontWeight: 'bold'}}>
                        {item.status}
                      </Text>
                      <Text style={{fontSize: 16, color: '#808080'}}>
                        Free Until - {endDate.toDateString()}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
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
                            color: '#808080',
                          }}>
                          {'\u20B9'} {item.price.totalPrice.discount}
                        </Text>
                        <Text style={{paddingLeft: 10, color: '#808080'}}>
                          {'\u20B9'} {item.price.totalPrice.discountPrice}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          <Text style={styles.text}>Upcoming Games</Text>
          {upcomingData &&
            upcomingData.map((item: any, index: any) => {
              let startDate = new Date(
                upcomingData[
                  index
                ].promotions.upcomingPromotionalOffers[0].promotionalOffers[0].startDate,
              );
              let endDate = new Date(
                upcomingData[
                  index
                ].promotions.upcomingPromotionalOffers[0].promotionalOffers[0].endDate,
              );
              return (
                <TouchableOpacity key={index} onPress={() => props.navigation.navigate('GameInfo', {data: item, upcoming: true,  gameDate: startDate})}>
                  <View style={styles.currentCard} key={index}>
                    <View style={styles.cardImage}>
                      <View style={{height: '80%', width: '80%'}}>
                        <Image
                          source={{uri: item.keyImages[0].url}}
                          style={styles.imageStyle}
                        />
                      </View>
                    </View>
                    <View style={styles.cardContent}>
                      <Text style={styles.gameTitle}>{item.title}</Text>
                      <Text style={{color: '#808080'}}>{item.offerType}</Text>
                      <Text style={{fontSize: 16, color: 'red', fontWeight: 'bold'}}>{item.status}</Text>
                      <Text style={{color: '#808080', fontWeight: 'bold', fontSize:16,}}>Coming Soon</Text>
                      <Text style={{color: '#808080'}}>
                        {startDate.toDateString()} - {endDate.toDateString()}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d4e3ea',
    height: HEIGHT,
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
    height: HEIGHT / 2.7,
    width: WIDTH / 1.11,
    margin: 10,
    elevation: 5,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    display: 'flex',
    flexDirection: 'row',
    // borderWidth: 0.5,
    backgroundColor: '#f4f4f9',
  },
  cardImage: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentImageStyle: {
    height: '85%',
    width: '100%',
    borderTopRightRadius: 20,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardContent: {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  gameTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  claimButton: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: 30,
    width: 100,
    backgroundColor: '#0078f2',
    borderRadius: 20,
  },
});

export default EpicFreeGamePageSection;
