import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Signup: undefined;
    TabScreen: undefined;
    FreeGame:undefined;
    GameInfo: undefined;
    EpicGame: undefined;
    App: undefined;
  };

export type LoginStackParamList = {
    Login: undefined;
    Signup: undefined;
    App: undefined;
};

export type NaviRouteScreenNavigationProps<
  Screen extends keyof RootStackParamList,
> = NativeStackNavigationProp<RootStackParamList , Screen>;

export type TabParamList = {
  Home: undefined,
  Profile: undefined,
  FreeGames: undefined,
  GameInfo: undefined,
}