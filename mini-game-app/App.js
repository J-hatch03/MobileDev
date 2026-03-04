import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";


export default function App() {
  const [userNumber, setUserNumber] = useState();
  
  const[gameIsOver, setGameIsOver] = useState(true);

  useFonts({});
  
  console.log(userNumber)
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false);
  }


  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }

  

  return (
  <LinearGradient colors={[Colors.primary800, Colors.accent500]} style={styles.rootScreen}>
    <ImageBackground 
      source={require('./assets/splash-icon.png')} 
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <SafeAreaView style={styles.rootScreen}>
        {screen}
      </SafeAreaView>
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
