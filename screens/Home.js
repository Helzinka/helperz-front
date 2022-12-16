import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/Carrousel.jpg")}
        style={styles.carrousel}
      />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Créer une annonce")}
        >
          <Image
            source={require("../assets/buy.jpg")}
            style={styles.imageCard}
          />
          <View style={styles.textCard}>
            <Text style={styles.titreCard}>
              Vous êtes sur le point de faire un achat ?
            </Text>
            <Text style={styles.textContent}>
              Créez une annonce dès maintenant afin de trouver un.e Helperz qui
              vous accompagnera lors de votre achat
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Liste helperz")}
        >
          <Image
            source={require("../assets/help.jpg")}
            style={styles.imageCard}
          />
          <View style={styles.textCard}>
            <Text style={styles.titreCard}>
              Trouvez un Helperz proche de votre annonce
            </Text>
            <Text style={styles.textContent}>
              Faites vous accompagner par un de nos nombreux Helperz certifié
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Liste annonces")}
        >
          <Image
            source={require("../assets/expert.jpg")}
            style={styles.imageCard}
          />
          <View style={styles.textCard}>
            <Text style={styles.titreCard}>
              Faites vous rémunérer pour votre expertise
            </Text>
            <Text style={styles.textContent}>
              Donnez un coup de main pour aider quelqu'un à ne pas se tromper
              sur son prochain achat
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
    backgroundColor: "white",
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
    justifyContent: "space-between",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
  imageCard: {
    width: "30%",
    height: "100%",
    borderRadius: 10,
  },
  textCard: {
    backgroundColor: "#00C6A0",
    borderRadius: 10,
    // borderWidth: 2,
    // borderColor: "#00C6A0",
    width: "68%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 5,
  },
  titreCard: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  textContent: {
    fontSize: 12,
    color: "white",
  },
});
