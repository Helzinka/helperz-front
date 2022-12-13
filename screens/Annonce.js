import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Annonce() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.validationContainer}>
        <Text style={styles.titrePage}>Statut de la mission</Text>
        <View style={styles.buttonValidate}>
          <Text style={styles.textValidate}>Validé</Text>
        </View>
      </View>
      <View style={styles.recapMission}>
        <Text style={styles.titreAnnonce}>Titre de l'annonce</Text>
        <Text style={styles.textAnnonce}>
          Lorem ipsum dolor sit amet. In atque quia ut dignissimos quasi est
          vero placeat ut consectetur animi non galisum doloremque vel unde
          velit. Id galisum quod quo similique minus qui sunt sint eum debitis
          impedit 33 necessitatibus itaque 33 voluptates laboriosam et neque
          inventore.
        </Text>
      </View>

      <View style={styles.profilContainer}>
        <Text style={styles.nomHelperz}>Nom Helperz</Text>
        <TouchableOpacity style={styles.avatar} activeOpacity={0.8}>
          <FontAwesome name="user" size={50} color={"white"} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  validationContainer: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  titrePage: {
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonValidate: {
    backgroundColor: "#00C6A0",
    borderRadius: 15,
    width: "90%",
    height: "40%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textValidate: {
    fontSize: 14,
  },
  recapMission: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingLeft: 10,
  },
  titreAnnonce: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textAnnonce: {
    fontSize: 14,
  },
  profilContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: "#006EFF",
    backgroundColor: "#006EFF",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  nomHelperz: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  textContent: {
    fontSize: 12,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "blue",
  },
});
