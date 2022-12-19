import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Calendar from "../components/Calendar";

export default function AnnonceFromHelperz() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profilContainer}>
        <Image
          source={require("../assets/profil1.jpg")}
          style={styles.imageCard}
        />
        <View style={styles.profilText}>
          <Text>Julie</Text>
          <Text>Bordeaux</Text>
          <Text>Notation:</Text>
          <Text>
            Experte dans le domain immobilier. Ancienne agent immobilier durant
            15 ans sur Bordeaux et ses alentours.
          </Text>
        </View>
      </View>

      <View style={styles.tagContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
            <Text>Disponibilités</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
            <Text>Localisation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
            <Text>Prix</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
            <Text>Avis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
            <Text>Missions</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.calendarContainer}>
        <Calendar />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonValidate}>
          <Text style={styles.textValidate}>Contacter</Text>
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
  profilContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  profilText: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: "60%",
  },
  photoContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  imageCard: {
    width: "30%",
    height: "80%",
    borderRadius: 90,
  },
  tagContainer: {
    flex: 0.3,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  filter: {
    width: "40%",
    height: "80%",
    backgroundColor: "#00C6A0",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 5,
  },
  calendarContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonValidate: {
    backgroundColor: "#006EFF",
    borderRadius: 15,
    width: "90%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textValidate: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
});
