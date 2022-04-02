import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View, StatusBar} from 'react-native';
import {AppStack} from './app/stack';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" animated={true} backgroundColor={'#121212'} />
      <NavigationContainer theme={DarkTheme}>
        <AppStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
