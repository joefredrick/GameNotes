import React from "react";
import { Text } from "react-native";
import PlatformListH from "../Components/PlatformListH";

const tempFreeGamePlatform = [
    {
        name: 'Epic',
        id:1,
        games: ['GTA - V','Genshin Impact'],
        img: 'PlatformLogo',
        link: 'Link to Page'
    },
    {
        name: 'Steam',
        id:2,
        games: ['CSGO','Genshin Impact'],
        img: 'PlatformLogo',
        link: 'Link to Page'
    },
    {
        name: 'GOG',
        id:3,
        games: ['Bunker II','Genshin Impact'],
        img: 'PlatformLogo',
        link: 'Link to Page'
    },
    {
        name: 'Riot',
        id:4,
        games: ['Valorant','LOL','TeamFightTactics'],
        img: 'PlatformLogo',
        link: 'Link to Page'
    }
]

const data = {title:"Free Games List", displaydata:tempFreeGamePlatform}

const Home = () => {
    return(
        <>
            <Text style={{fontSize: 32}}>Home Screen</Text>
            <PlatformListH data={data}></PlatformListH>
        </>
    )
}

export default Home;