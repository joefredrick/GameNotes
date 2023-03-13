import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Game Notes First Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  textstyle: {
    fontSize: 30
  }
});

export default App;
