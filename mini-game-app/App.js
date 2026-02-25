import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";


export default function App() {
  return (
  <LinearGradient colors={['#4e0324', '#ddb52f']} style={styles.rootScreen}>
    <ImageBackground 
      source={require('./assets/splash-icon.png')} 
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
      <StartGameScreen />
    </ImageBackground>
    
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
backgroundImage: {
  opacity: 0.15,
}
});
