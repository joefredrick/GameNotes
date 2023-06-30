import React from "react";
import { Dimensions, Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { NaviRouteScreenNavigationProps } from "../types";
import { Neomorph, Shadow } from "react-native-neomorph-shadows";

type Props = {
  navigation: NaviRouteScreenNavigationProps<'Home'>;
};

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const DemoPage = (props: Props) => {
  return (
    <View></View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DEE9FD",
    height: HEIGHT,
    width: WIDTH,
    alignItems: 'center',
  },
  headerSection: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#DEE9FD',
  },
  headerText: {
    color: '#91A1BD',
    marginTop: 20,
    fontSize: 26,
    fontFamily: 'MW_Regular',
  },
  mainContainer: {
    height: '90%',
    width: WIDTH,
  },
})

export default DemoPage;