import React, {useEffect, useState} from "react";
import { Dimensions, Text, View, StyleSheet, 
  Modal, TextInput, Image, TouchableOpacity } from "react-native";
import { NaviRouteScreenNavigationProps } from "../types";
import { Neomorph, Shadow } from "react-native-neomorph-shadows";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DataContext from "../store/dataContext";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import storage from '@react-native-firebase/storage';
import EditPenIcon from '../assets/edit-pen.svg';

import app from '../config/firebase';
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const db = getFirestore(app);

type props = {
    navigation: NaviRouteScreenNavigationProps<'Home'>;
    data: any;
};

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const EditProfilePageSection = (props: props) => {

const [imageUri, setImageUri] = useState(undefined);
const [defaultImage, setDefaultImage] = useState(false);
const [openModal, setOpenModal] = useState(false);
const [userName, setUserName] = useState();
const [email, setEmail] = useState();
const [userID, setuserID] = useState("");
const [userVal, setUserVal] = useState({});

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
        setUserVal({...userVal,
          UserName: data?.["UserName"],
          email: data?.["email"],
          FCM_Token: data?.["FCM_Token"],
          imageUrl: data?.["imageUrl"]
        })
        if(data?.["imageUrl"]){
          setDefaultImage(true);
          setImageUri(data?.["imageUrl"])
        }
    });
  }

  useEffect(()=>{
  if(userID){
    getUserData()
  }
  },[userID])

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

const updateProfile = async () => {
  const DateStamp = Date.now()
  const reference = storage().ref(`file:///data/user/com.gamenotes/${userID}/${DateStamp}`);
  let imgurl = `https://firebasestorage.googleapis.com/v0/b/gamenotes-b30b3.appspot.com/o/file%3A%2Fdata%2Fuser%2Fcom.gamenotes%2F${userID}%2F${DateStamp}?alt=media`
  const pathToFile = imageUri;
  console.log(imageUri);
  const userval = {...userVal, imageUrl: imgurl}
  // uploads file
  setUserVal(userval);
  setDoc(doc(db, "users", userID), userval);
  await reference.putFile(pathToFile);
  const url = await storage().ref(`file:///data/user/com.gamenotes/${userID}/${DateStamp}`).getDownloadURL();
  console.log(url);
  props.data.update(imgurl);
  props.navigation.navigate('TabScreen')
}

return (
  <View style={styles.container}>
    <View style={styles.mainContainer}>
      <View style={styles.profileCard}>
        <View style={styles.profileImage}>
          <TouchableOpacity onPress={() => setOpenModal(true)}>
            <Neomorph inner style={styles.profileImageOuter}>
              <View style={styles.profileImageInner}>
              <Image 
                source={ 
                  defaultImage === false 
                    ? require("../assets/UserDefault.png") 
                    : {uri: imageUri}
                } 
                style={styles.img}
              />
              </View>
            </Neomorph>
              <Neomorph style={styles.editButton}>
                <EditPenIcon fill={'#91A1BD'} height={25} width={25}/>
              </Neomorph>
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
        </View>
      </View>
      <View style={styles.detailsSection}>
        <Neomorph style={styles.detailsCard}>
          <Shadow
            inner
            style={styles.input}
          >
            <TextInput 
              placeholder={userName} />
              
          </Shadow>
          {/* <Text style={styles.usernameText}>{userName}</Text> */}
          <Text style={styles.emailText}>{email}</Text>
          <TouchableOpacity onPress={updateProfile}>
            <Neomorph style={styles.signoutButton}>
              <Text style={styles.signOutText}>Update Profile</Text>
            </Neomorph>
          </TouchableOpacity>
        </Neomorph>
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
mainContainer: {
  height: '100%',
  width: WIDTH,
  alignItems: 'center',
},
profileCard: {
  width: WIDTH,
  alignItems: 'center',
},
profileImage: {
  marginTop: 15,
},
profileImageOuter: {
  borderRadius: 100,
  shadowRadius: 4,
  backgroundColor: '#DEE9FD',
  width: 130,
  height: 130,
  justifyContent: 'center',
  alignItems: 'center',
},
profileImageInner: {
  backgroundColor: '#DEE9FD',
  height: 100,
  width: 100,
  borderRadius: 100,
  borderWidth: 5,
  borderColor: '#CCDEFA',
  alignItems: 'center',
  justifyContent: 'center',
},
img: {
  height: 110,
  width: 110,
  borderRadius: 100,
},
editButton: {
  height: 40,
  width: 40,
  shadowRadius: 10,
  backgroundColor: '#DEE9FD',
  borderRadius: 100,
  borderWidth: 0.35,
  borderColor: '#91A1BD',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  marginTop: '60%',
  marginLeft: '83%',
},
detailsSection: {
  height: HEIGHT / 2.1,
  width: WIDTH,
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  zIndex: -1,
  paddingTop: '20%',
},
detailsCard: {
  shadowRadius: 10,
  display: 'flex',
  marginTop: 15,
  backgroundColor: '#DEE9FD',
  height: HEIGHT / 2.5,
  width: WIDTH / 1.2,
  borderRadius: 10,
  borderWidth: 0.35,
  borderColor: '#91A1BD',
  alignItems: 'center',
  flexDirection: 'column',
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
  marginTop: 80,
  justifyContent: 'center',
  paddingLeft: 20,
},
usernameText: {
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

export default EditProfilePageSection;