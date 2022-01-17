import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const icon = require('./assets/adaptive-icon.png')

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#888', fontSize: 18}}>
        Open up App.js to start working on your app!
      </Text>

      {/*<Image source={require('./assets/adaptive-icon.png')} style={{width: 200, height: 200}}/>*/}
      {/*<Image source={icon} style={{width: 200, height: 200}}/>*/}
      <Image source={icon} style={styles.icon}/>

      <Image source={{uri: "https://pbs.twimg.com/profile_images/1148616067/phph86hLS_400x400"}}
             style={{width: 200, height: 200}}/>

      <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.button}>
        <Text style={styles.buttonText}>button</Text>
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

  icon: {
    width: 200,
    height: 200
  },

  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});


