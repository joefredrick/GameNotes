import React from "react";
import { Text, ScrollView } from "react-native";


const PlatformListH = (props: any) => {
    return(
        <>
            <Text>{props.data.title}</Text>
            <ScrollView horizontal={true}>
            {props.data.displaydata.map((item:any) =>{return(<Text>{item.name}</Text>)})}
            </ScrollView>
        </>
    )
}

export default PlatformListH;