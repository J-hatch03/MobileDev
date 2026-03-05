import { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";

// import { useFonts } from "expo-font";
// import AppLoading from 'expo-app-loading';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  
  const[gameIsOver, setGameIsOver] = useState(true);

  const[guessRounds, setGuessRounds] = useState(0);

  // const [fontsLoaded] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  // });

  // if(!fontsLoaded) {
  //   return <AppLoading />;
  // }

  console.log(userNumber)
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false);
  }


  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  };

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen 
      userNumber={userNumber} 
      roundsNumber={guessRounds} 
      onStartNewGame={startNewGameHandler}
      />
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
