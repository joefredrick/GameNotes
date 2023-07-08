import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import FreeGamePlatformItem from '../Components/FreeGamePlatformItem';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const tempFreeGamePlatform = [
  {
    name: 'Epic',
    games: ['GTA - V', 'Genshin Impact'],
    img: require('../assets/EpicLogo.png'),
    link: 'EpicGame',
  },
  {
    name: 'Steam',
    games: ['CSGO', 'Genshin Impact'],
    img: require('../assets/SteamLogo.png'),
    link: 'Home',
  },
  {
    name: 'GOG',
    games: ['Bunker II', 'Genshin Impact'],
    img: require('../assets/GOGLogo.png'),
    link: 'Home',
  },
  {
    name: 'Riot',
    games: ['Valorant', 'LOL', 'TeamFightTactics'],
    img: require('../assets/RiotLogo.png'),
    link: 'Profile',
  },
];

const GamePlatformList = (props: any) => {
  return (
    <>
      <Text style={styles.title}>Game Platforms</Text>
      <View style={styles.container}>
        {tempFreeGamePlatform.map((item: any, index: any) => {
          return (
            <FreeGamePlatformItem
              key={index}
              item={{itemData: item, prop: props.props}}
            />
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    paddingLeft: 10,
    fontFamily: 'OpenSans-Bold',
    color: '#6C7A93',
  },
  container: {
    height: HEIGHT,
    width: WIDTH,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default GamePlatformList;
