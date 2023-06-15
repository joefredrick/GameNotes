import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Autorization status:', authStatus)
  }
}

export async function GetFCMToken() {
  let fcmtoken = AsyncStorage.getItem('fcmtoken');
  try {
    const fcmtoken = await messaging().getToken();
    
    if(fcmtoken) {
      await AsyncStorage.setItem("fcmtoken", fcmtoken);
      console.log("old token:", fcmtoken)
    }

  } catch (error) {
      console.error(error,"error in fcmtoken");
  }
}

export const NotificationListner = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(async (remoteMessage) => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Check whether an initial notification is available 
  messaging()
  .getInitialNotification()
  .then(async (remoteMessage) => {
    if (remoteMessage) {
      console.log(
        'Notification caused app to open from quit state:',
        remoteMessage.notification,
      );
    }
  });

  messaging().onMessage(async remoteMessage => {
    console.log("Notification on froground state...", remoteMessage)
  })

}
