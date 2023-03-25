import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }

export type RootStackParamList = {
    Home: undefined;
    Data: undefined;
  };