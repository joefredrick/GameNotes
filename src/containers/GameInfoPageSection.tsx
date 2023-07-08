import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import {NaviRouteScreenNavigationProps} from '../types';
import {Neomorph} from 'react-native-neomorph-shadows';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

type Props = {
  navigation: NaviRouteScreenNavigationProps<'Home'>;
  data: any;
};

const GameInfoPageSection = (props: Props) => {
  const GameInfo = props.data.data;
  console.log(GameInfo);
  let releaseDate = new Date(GameInfo.effectiveDate);
  console.log(props);
  const FinalDate = props.data.gameDate;
  let upcoming = props.data.upcoming;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.card}>
          <Image source={{uri: GameInfo.keyImages[0].url}} style={styles.img} />
        </View>
      </View>
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.title}>{GameInfo.title}</Text>
        <View style={{alignSelf: 'center'}}>
          <Neomorph style={styles.offerStyleBox}>
            <Text style={styles.offerStyle}>{GameInfo.offerType}</Text>
          </Neomorph>
        </View>
        {upcoming ? (
          <></>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}>
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
              }}>
              {'\u20B9'} {GameInfo.price.totalPrice.discount}
            </Text>
            <Text style={{paddingLeft: 10, color: '#6C7A93'}}>
              {'\u20B9'} {GameInfo.price.totalPrice.discountPrice}
            </Text>
          </View>
        )}
        {upcoming ? (
          <Text
            style={{
              fontSize: 16,
              color: '#6C7A93',
              fontFamily: 'OpenSans-Regular',
              alignSelf: 'center',
              marginBottom: 10,
            }}>
            Sale Starts at {FinalDate.toLocaleString()}
          </Text>
        ) : (
          <Text
            style={{
              fontSize: 16,
              color: '#6C7A93',
              fontFamily: 'OpenSans-Regular',
              alignSelf: 'center',
              marginBottom: 10,
            }}>
            Sale Ends at {FinalDate.toLocaleString()}
          </Text>
        )}
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(GameInfo.RedeemLink);
          }}>
          <View style={{alignItems: 'center'}}>
            <Neomorph style={styles.redeemButton}>
              <Text style={styles.redeemText}>Go To Page</Text>
            </Neomorph>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#91A1BD',
              fontFamily: 'OpenSans-Regular',
            }}>
            Developer
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#6C7A93',
              fontFamily: 'OpenSans-Regular',
            }}>
            {GameInfo.customAttributes[1].value}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            width: '100%',
            borderColor: '#91A1BD',
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#91A1BD',
              fontFamily: 'OpenSans-Regular',
            }}>
            Publisher
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#6C7A93',
              fontFamily: 'OpenSans-Regular',
            }}>
            {GameInfo.customAttributes[0].value}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            width: '100%',
            borderColor: '#91A1BD',
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#91A1BD',
              fontFamily: 'OpenSans-Regular',
            }}>
            Release Date
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#6C7A93',
              fontFamily: 'OpenSans-Regular',
            }}>
            {releaseDate.toLocaleDateString()}
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            width: '100%',
            borderColor: '#91A1BD',
          }}></View>
        <View
          style={{
            flexDirection: 'column',
            margin: 10,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#91A1BD',
              fontFamily: 'OpenSans-Regular',
            }}>
            Description
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#6C7A93',
              fontFamily: 'OpenSans-Regular',
              padding: 5,
            }}>
            {GameInfo.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DEE9FD',
    width: WIDTH,
    height: HEIGHT,
    display: 'flex',
    flexDirection: 'column',
  },
  imageContainer: {
    width: WIDTH,
    height: HEIGHT / 3.5,
    backgroundColor: '#cad3e8',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  img: {
    height: '100%',
    width: 'auto',
    borderRadius: 20,
  },
  card: {
    display: 'flex',
    margin: 15,
    justifyContent: 'center',
  },
  mainContainer: {
    margin: 10,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 80,
  },
  title: {
    fontSize: 32,
    color: '#6C7A93',
    marginLeft: 10,
    marginBottom: 5,
    fontFamily: 'OpenSans-Bold',
    textAlign: 'center',
  },
  offerStyle: {
    fontSize: 12,
    fontFamily: 'OpenSans-Bold',
    color: '#6C7A93',
    alignSelf: 'center',
  },
  offerStyleBox: {
    height: 30,
    width: 100,
    borderRadius: 10,
    borderWidth: 0.35,
    shadowRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#DEE9FD',
    marginBottom: 10,
  },
  redeemButton: {
    height: 50,
    width: 150,
    backgroundColor: '#DEE9FD',
    borderRadius: 50,
    shadowRadius: 10,
    borderWidth: 0.35,
    borderColor: '#91A1BD',
    justifyContent: 'center',
  },
  redeemText: {
    display: 'flex',
    textAlign: 'center',
    fontSize: 18,
    color: '#6C7A93',
    fontFamily: 'OpenSans-Bold',
  },
});

export default GameInfoPageSection;
