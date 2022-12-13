import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/Carrousel.jpg")}
        style={styles.carrousel}
      />
      <View style={styles.content}>
        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
          <Image
            source={require("../assets/Carrousel.jpg")}
            style={styles.imageCard}
          />
          <View style={styles.textCard}>
            <Text style={styles.titreCard}>TITRE</Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet. Quo quod corrupti sit modi voluptas
              qui consequuntur internos.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
          <Image
            source={require("../assets/Carrousel.jpg")}
            style={styles.imageCard}
          />
          <View style={styles.textCard}>
            <Text style={styles.titreCard}>TITRE</Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet. Quo quod corrupti sit modi voluptas
              qui consequuntur internos.
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} activeOpacity={0.8}>
          <Image
            source={require("../assets/Carrousel.jpg")}
            style={styles.imageCard}
          />
          <View style={styles.textCard}>
            <Text style={styles.titreCard}>TITRE</Text>
            <Text style={styles.textContent}>
              Lorem ipsum dolor sit amet. Quo quod corrupti sit modi voluptas
              qui consequuntur internos.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carrousel: {
    flex: 1.5,
    width: "100%",
    height: "40%",
  },
  content: {
    flex: 3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  card: {
    flexDirection: "row",
    width: "90%",
    height: "28%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imageCard: {
    width: "30%",
    height: "100%",
    borderRadius: 10,
  },
  textCard: {
    backgroundColor: "#00C6A0",
    borderRadius: 10,
    width: "68%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  titreCard: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textContent: {
    fontSize: 14,
  },
});
