import React from "react";
import { Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import FreeGamePlatformItem from "../Components/FreeGamePlatformItem";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const tempFreeGamePlatform = [
    {
        name: 'Epic',
        id:1,
        games: ['GTA - V','Genshin Impact'],
        img: require("../assets/EpicLogo.png"),
        link: 'Link to Page'
    },
    {
        name: 'Steam',
        id:2,
        games: ['CSGO','Genshin Impact'],
        img: require("../assets/SteamLogo.png"),
        link: 'Link to Page'
    },
    {
        name: 'GOG',
        id:3,
        games: ['Bunker II','Genshin Impact'],
        img: require("../assets/GOGLogo.png"),
        link: 'Link to Page'
    },
    {
        name: 'Riot',
        id:4,
        games: ['Valorant','LOL','TeamFightTactics'],
        img: require("../assets/RiotLogo.png"),
        link: 'Link to Page'
    }
]

const PlatformListH = (props: any) => {
    return(
        <>
            <Text style={styles.title}>Free Games List</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {tempFreeGamePlatform.map((item:any, index) =>{return(<FreeGamePlatformItem key={index} item={{itemData: item, prop: props.props }}/>)})}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
   title:{
    fontSize: 24,
   }
})

export default PlatformListH;