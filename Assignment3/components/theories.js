import { View, Text, ScrollView, StyleSheet } from "react-native";

const theories = [
  "Theory 1: The universe is a simulation",
  "Theory 2: Time is not linear",
  "Theory 3: Consciousness exists outside the brain",
  "Theory 4: We live in a multiverse",
  "Theory 5: Dark matter is a fifth dimension",
  "Theory 6: The moon affects human behavior",
  "Theory 7: Dreams are parallel realities",
  "Theory 8: Gravity is not a force but a curve",
  "Theory 9: Language shapes our reality",
  "Theory 10: The universe is alive",
];

export default function Theories() {
  return (
    <View style={styles.theoriesBox}>
      <ScrollView>
        {theories.map((theory, index) => (
          <Text key={index} style={styles.theoryItem}>
            {theory}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  theoriesBox: {
    width: "90%",
    height: "50%",
    backgroundColor: "#ecd5a3",
    alignItems: "center",
  },
  theoryItem: {
    fontSize: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
  },
});