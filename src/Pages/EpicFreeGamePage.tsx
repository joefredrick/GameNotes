import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NaviRouteScreenNavigationProps} from '../types';
import EpicFreeGamePageSection from '../containers/EpicFreeGamePageSection';

interface EpicFreeGamePageProps {
  navigation: NaviRouteScreenNavigationProps<'Home'>;
}

const EpicFreeGamePage: React.FunctionComponent<EpicFreeGamePageProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <EpicFreeGamePageSection
        navigation={navigation}></EpicFreeGamePageSection>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DEE9FD',
  },
});
export default EpicFreeGamePage;
