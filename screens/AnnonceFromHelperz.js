import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Calendar from "../components/Calendar";

export default function AnnonceFromHelperz() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profilContainer}>
        <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.avatar} activeOpacity={0.8}>
            <FontAwesome name="user" size={50} color={"black"} />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Prénom:</Text>
          <Text>Ville:</Text>
          <Text>Notation:</Text>
          <Text>Bio:</Text>
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
  },
  profilContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  photoContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: "#006EFF",
    backgroundColor: "#006EFF",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  tagContainer: {
    flex: 0.3,
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
    flex: 2.5,
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
