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
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Game Notes</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.backdropContainer}>
          <View style={styles.big_BG_Drop}>
            <Neomorph
              style={styles.big_BG_DropBorder}
            >
              <Neomorph
                inner
                style={styles.big_BG_InnerColor}
              >
                <Neomorph
                  style={styles.big_BG_InnerBorder}
                />
              </Neomorph>
            </Neomorph>
          </View>
          <View>
            <Neomorph
              style={styles.small_BG_DropBorder}
            >
              <Neomorph
                inner
                style={styles.small_BG_InnerColor}
              >
                <Neomorph
                  style={styles.small_BG_InnerBorder}
                />
              </Neomorph>
            </Neomorph>
          </View>
        </View>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.loginSection}>
          <Neomorph style={styles.loginCard}>
            <View style={{ flexDirection: 'column', margin: 30, }}>
              <Shadow
                inner
                style={styles.input}
              >
                <TextInput placeholder={'Username'}></TextInput>
              </Shadow>
              <Shadow
                inner
                style={styles.input}
              >
                <TextInput 
                placeholder={'Password'}></TextInput>
              </Shadow>
              <TouchableOpacity style={{ paddingTop: 20, alignItems: 'center' }}>
                <Neomorph style={styles.submitButton}>
                  <Text style={styles.submitText}>Login</Text>
                </Neomorph>
              </TouchableOpacity>
              <View style={styles.signupSection}>
                <Text style={styles.newbieText}>Newbie?</Text>
                <TouchableOpacity>
                  <Text
                    style={styles.signupText}
                    onPress={() => props.navigation.navigate('Signup')}>
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Neomorph>
        </View>
        <View style={styles.bottomBackdropContainer}>
          <View style={styles.bottomSmallBG}>
            <Neomorph
              style={styles.small_BG_DropBorder}
            >
              <Neomorph
                inner
                style={styles.small_BG_InnerColor}
              >
                <Neomorph
                  style={styles.small_BG_InnerBorder}
                />
              </Neomorph>
            </Neomorph>
          </View>
          <View style={styles.bottomBigBG}>
            <Neomorph
              style={styles.big_BG_DropBorder}
            >
              <Neomorph
                inner
                style={styles.big_BG_InnerColor}
              >
                <Neomorph
                  style={styles.big_BG_InnerBorder}
                />
              </Neomorph>
            </Neomorph>
          </View>
        </View>
      </View>
    </View>
  )
}

export default DemoPage;

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
  backdropContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
  },
  big_BG_Drop: {
    marginRight: WIDTH / 1.7,
    marginLeft: -WIDTH / 3.2,
  },
  loginText: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: 25,
    color: '#6C7A93',
    fontFamily: 'OpenSans-Bold',
  },
  loginSection: {
    height: HEIGHT / 2.1,
    width: WIDTH,
    display: 'flex',
    alignItems: 'center',
  },
  loginCard: {
    shadowRadius: 10,
    display: 'flex',
    marginTop: 15,
    backgroundColor: '#DEE9FD',
    height: HEIGHT / 2.5,
    width: WIDTH / 1.1,
    borderRadius: 10,
    borderWidth: 0.35,
    borderColor: '#91A1BD',
  },
  input: {
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowColor: '#91A1BD',
    shadowRadius: 10,
    borderRadius: 5,
    backgroundColor: '#DEE9FD',
    width: 265,
    height: 40,
    marginTop: 10,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  submitButton: {
    height: 40,
    width: 150,
    shadowRadius: 10,
    backgroundColor: '#DEE9FD',
    borderRadius: 10,
    borderWidth: 0.35,
    borderColor: '#91A1BD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontSize: 18,
    color: '#6C7A93',
    fontFamily: 'OpenSans-SemiBold'
  },
  signupSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  newbieText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6C7A93',
    fontFamily: 'OpenSans-Bold'
  },
  signupText: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#3265C8',
    marginLeft: 5,
    fontFamily: 'OpenSans-Bold'
  },
  bottomBackdropContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  big_BG_DropBorder: {
    shadowRadius: 3,
    borderRadius: 100,
    backgroundColor: '#DEE9FD',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  big_BG_InnerColor: {
    shadowRadius: 7,
    borderRadius: 90,
    opacity: 0.4,
    backgroundColor: '#91A1BD',
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  big_BG_InnerBorder: {
    shadowRadius: 7,
    borderRadius: 50,
    backgroundColor: '#DEE9FD',
    width: 100,
    height: 100,
  },
  bottomBigBG: {
    height: HEIGHT / 4,
    width: WIDTH / 2,
  },
  small_BG_DropBorder: {
    shadowRadius: 3,
    borderRadius: 100,
    backgroundColor: '#DEE9FD',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  small_BG_InnerColor: {
    shadowRadius: 7,
    borderRadius: 90,
    opacity: 0.4,
    backgroundColor: '#91A1BD',
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  small_BG_InnerBorder: {
    shadowRadius: 7,
    borderRadius: 50,
    backgroundColor: '#DEE9FD',
    width: 50,
    height: 50,
  },
  bottomSmallBG: {
    marginRight: WIDTH / 2,
    marginLeft: -WIDTH / 8,
  },
})