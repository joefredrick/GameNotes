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
import {Neomorph} from 'react-native-neomorph-shadows';

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
      'https://gamenotes-b30b3-default-rtdb.firebaseio.com/freeGames/Epic.json',
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
                ].endDate,
              );
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    props.navigation.navigate('GameInfo', {
                      data: item,
                      upcoming: false,
                      gameDate: endDate,
                    })
                  }>
                  <Neomorph style={styles.currentCard} key={index}>
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
                          source={{uri: item.Thumbnail}}
                          style={styles.currentImageStyle}
                        />
                        <Text
                          style={{
                            display: 'flex',
                            alignSelf: 'center',
                            fontSize: 16,
                            fontFamily: 'OpenSans-Bold',
                            color: 'white',
                            paddingTop: 5,
                          }}>
                          FREE NOW
                        </Text>
                      </View>
                    </View>
                    <View style={styles.cardContent}>
                      <Text style={styles.gameTitle}>{item.title}</Text>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#6C7A93',
                          fontFamily: 'OpenSans-Regular',
                        }}>
                        {item.offerType}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          color: 'green',
                          fontFamily: 'OpenSans-Bold',
                        }}>
                        {item.status}
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#6C7A93',
                          fontFamily: 'OpenSans-Regular',
                        }}>
                        Free Until - {endDate.toDateString()}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Neomorph
                          style={{
                            height: 30,
                            width: 50,
                            borderRadius: 10,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#DEE9FD',
                            borderWidth: 0.35,
                            borderColor: '#91A1BD',
                            shadowRadius: 10,
                          }}>
                          <Text style={{color: '#6C7A93'}}>-100%</Text>
                        </Neomorph>
                        <Text
                          style={{
                            textDecorationLine: 'line-through',
                            paddingLeft: 10,
                            color: '#6C7A93',
                            fontFamily: 'OpenSans-Regular',
                          }}>
                          {'\u20B9'} {item.originalPrice}
                        </Text>
                        <Text
                          style={{
                            paddingLeft: 10,
                            color: '#6C7A93',
                            fontFamily: 'OpenSans-Regular',
                          }}>
                          {'\u20B9'} {item.discountPrice}
                        </Text>
                      </View>
                    </View>
                  </Neomorph>
                </TouchableOpacity>
              );
            })}
          <Text style={styles.text}>Upcoming Games</Text>
          {upcomingData &&
            upcomingData.map((item: any, index: any) => {
              let startDate = new Date(
                upcomingData[
                  index
                ].startDate,
              );
              let endDate = new Date(
                upcomingData[
                  index
                ].endDate,
              );
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    props.navigation.navigate('GameInfo', {
                      data: item,
                      upcoming: true,
                      gameDate: startDate,
                    })
                  }>
                  <Neomorph style={styles.currentCard} key={index}>
                    <View style={styles.cardImage}>
                      <View style={{height: '80%', width: '80%'}}>
                        <Image
                          source={{uri: item.Thumbnail}}
                          style={styles.imageStyle}
                        />
                      </View>
                    </View>
                    <View style={styles.cardContent}>
                      <Text style={styles.gameTitle}>{item.title}</Text>
                      {/* <Text style={{color: '#6C7A93'}}>{item.offerType}</Text> */}
                      <Text
                        style={{
                          fontSize: 16,
                          color: 'red',
                          fontFamily: 'OpenSans-Bold',
                        }}>
                        {item.status}
                      </Text>
                      <Text
                        style={{
                          color: '#6C7A93',
                          fontFamily: 'OpenSans-Bold',
                          fontSize: 16,
                        }}>
                        Coming Soon
                      </Text>
                      <Text style={{color: '#6C7A93'}}>
                        {startDate.toDateString()} - {endDate.toDateString()}
                      </Text>
                    </View>
                  </Neomorph>
                </TouchableOpacity>
              );
            })}
          <View style={{paddingBottom: 100}}></View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DEE9FD',
    height: HEIGHT,
    width: WIDTH,
    margin: 10,
  },
  text: {
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
    color: '#6C7A93',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
  },
  currentCard: {
    shadowRadius: 10,
    height: HEIGHT / 2.7,
    width: WIDTH / 1.11,
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 0.35,
    borderColor: '#91A1BD',
    borderRadius: 10,
    backgroundColor: '#DEE9FD',
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
    fontFamily: 'OpenSans-Bold',
    color: '#6C7A93',
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
