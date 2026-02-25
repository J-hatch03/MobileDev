import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import NestedText from "./components/NestedText";
import Theories from "./components/theories";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.header}>
          <Text style={styles.headerText}>My Tasks</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.question}>
            <NestedText />
          </View>
          <View style={styles.last}>
            <Theories />
          </View>
          
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecd5a3",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#ecd5a3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    ...Platform.select({
        ios: { paddingTop:50},
        android: {paddingTop: StatusBar.currentHeight }
  })},
  headerText: {
    fontSize: 32,
    fontWeight: "900",
    color: "white",
    letterSpacing: 2,
  },
  content: { 
    flex: 1,                 
    justifyContent: "center", 
    alignItems: "center",     
  },
  question: {
    flex: 0.4,
  },
  last: {
    flex: 1,
  },
});
