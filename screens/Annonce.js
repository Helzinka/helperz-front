import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function Annonce() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Bonjour</Text>
      </View>
      <View style={styles.detailContainer}></View>
      <View style={styles.buttonContainer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  detailContainer: {
    flex: 1,
    backgroundColor: "yellow",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
});
