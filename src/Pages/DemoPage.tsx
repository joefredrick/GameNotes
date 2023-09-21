import React, {useEffect, useState} from "react";
import { Dimensions, Text, View, StyleSheet, 
  Modal, TextInput, Image, TouchableOpacity } from "react-native";
import { NaviRouteScreenNavigationProps } from "../types";
import { Neomorph, Shadow } from "react-native-neomorph-shadows";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DataContext from "../store/dataContext";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import storage from '@react-native-firebase/storage';

import app from '../config/firebase';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const db = getFirestore(app);

type Props = {
  navigation: NaviRouteScreenNavigationProps<'Home'>;
};

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;


const DemoPage = (props: Props) => {

  const { signOut } = React.useContext(DataContext);
  const [imageUri, setImageUri] = useState('');
  const [defaultImage, setDefaultImage] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [userID, setuserID] = useState("");

  useEffect(() => {
    (async()=> {
        const value = await AsyncStorage.getItem('user')
        if(value !== null){
          console.log(value);
          setuserID(value)
        }
        else{
            const uid = getAuth(app).currentUser?.uid || "";
            setuserID(uid)
        }
    })();
    
  }, [])

  const getUserData:any = () => {
      const docRef = doc(db, "users", userID);
      getDoc(docRef).then((res) => {
          const data = res.data()
          const UserName = data?.["UserName"]
          const UserEmail = data?.["email"]
          setUserName(UserName)
          setEmail(UserEmail)
      });
  }

  if(userID){
      getUserData()
  }
  
  const openCamera = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.error('User cancelled image picker');
      } else if (response.errorMessage) {
        console.error('Image Picker Error: ', response.errorMessage);
      } else {
        // const source = {uri: response.assets};
        setImageUri(response.assets['0'].uri);
        setDefaultImage(true);
        setOpenModal(false);
      }
    });
  };

  const openGallery = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.error('User cancelled image picker');
      } else if (response.errorMessage) {
        console.error('Image Picker Error: ', response.errorMessage);
      } else {
        // const source = {uri: response.assets};
        setImageUri(response.assets['0'].uri);
        setDefaultImage(true);
        setOpenModal(false);
      }
    });
  };

  const signedOut = async () => {
    await AsyncStorage.removeItem('user');
    signOut();
  }

  const uploadImage = async () => {
    const reference = storage().ref(imageUri);
    const pathToFile = imageUri;
    // uploads file
    await reference.putFile(pathToFile);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.mainContainer}>
        <Neomorph style={styles.profileImage}>
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <Image 
              source={ 
                defaultImage === false 
                  ? require("../assets/UserDefault.png") 
                  : {uri: imageUri}
              } 
              style={styles.img}/>
              <Modal
                visible={openModal}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setOpenModal(false)}>
                <View style={styles.modalBackground}>
                  <View style={styles.modalContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        openCamera();
                      }}>
                      <Text style={styles.modalText}>
                        Take Photo
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        openGallery();
                      }}>
                      <Text style={styles.modalText}>
                        Choose Photo from Library
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
          </TouchableOpacity>
        </Neomorph>
        <View style={styles.detailsSection}>
          <Neomorph style={styles.detailsCard}>
            <Text style={styles.usenameText}>{userName}</Text>
            <Text style={styles.emailText}>{email}</Text>
            <TouchableOpacity onPress={signedOut}>
              <Neomorph style={styles.signoutButton}>
                <Text style={styles.signOutText}>Sign Out</Text>
              </Neomorph>
            </TouchableOpacity>
          </Neomorph>
          <TouchableOpacity onPress={uploadImage}>
            <Neomorph style={styles.signoutButton}>
              <Text style={styles.signOutText}>Upload Image</Text>
            </Neomorph>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    alignItems: 'center',
  },
  profileImage: {
    shadowRadius: 10,
    display: 'flex',
    backgroundColor: '#DEE9FD',
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#CCDEFA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 130,
    width: 130,
    borderRadius: 100,
  },
  detailsSection: {
    height: HEIGHT / 2.1,
    width: WIDTH,
    display: 'flex',
    alignItems: 'center',
  },
  detailsCard: {
    shadowRadius: 10,
    display: 'flex',
    marginTop: 15,
    backgroundColor: '#DEE9FD',
    height: HEIGHT / 3.5,
    width: WIDTH / 1.2,
    borderRadius: 10,
    borderWidth: 0.35,
    borderColor: '#91A1BD',
    alignItems: 'center',
    flexDirection: 'column',
  },
  usenameText: {
    fontSize: 22,
    color: '#6C7A93',
    fontFamily: 'OpenSans-Bold',
    marginTop: 20,
  },
  emailText: {
    fontSize: 16,
    color: '#6C7A93',
    fontFamily: 'OpenSans-Regular',
    marginTop: 20,
  },
  signoutButton: {
    height: 40,
    width: 150,
    shadowRadius: 10,
    marginTop: 20,
    backgroundColor: '#DEE9FD',
    borderRadius: 10,
    borderWidth: 0.35,
    borderColor: '#91A1BD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutText: {
    fontSize: 18,
    color: '#6C7A93',
    fontFamily: 'OpenSans-SemiBold'
  },
  modalText: {
    padding: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
  },
})

export default DemoPage;