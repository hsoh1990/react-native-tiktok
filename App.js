import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import splash from './assets/splash.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#888', fontSize: 18}}>
        Open up App.js to start working on your app!
      </Text>

      {/*<Image source={require('./assets/splash.png')} style={{width: 500, height: 200}}/>*/}
      <Image source={splash} style={{width: 500, height: 200}}/>
      {/*<Image source={splash} style={styles.splash}/>*/}


      <Image source={{uri: "https://pbs.twimg.com/profile_images/1148616067/phph86hLS_400x400"}} style={{width: 200, height: 200}}/>

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  splash: {
    width: 500,
    height: 200
  }
});
