import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
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
        <View style={styles.photo}>
          <TouchableOpacity style={styles.avatar} activeOpacity={0.8}>
            <FontAwesome name="user" size={50} color={"white"} />
          </TouchableOpacity>
        </View>
        <View style={styles.profil}>
          <Text style={styles.nomHelperz}>Nom Helperz</Text>
          <View style={styles.notation}>
            <FontAwesome name="star" size={20} color={"#f1c40f"} />
            <FontAwesome name="star" size={20} color={"#f1c40f"} />
            <FontAwesome name="star" size={20} color={"#f1c40f"} />
            <FontAwesome name="star" size={20} color={"#f1c40f"} />
            <FontAwesome name="star" size={20} color={"#f1c40f"} />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.price}>
          <Text style={styles.text}>50€</Text>
        </View>
        <View style={styles.calendar}>
          <Text style={styles.text}>23/12/2022</Text>
        </View>
      </View>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  photo: {
    flexDirection: "column",
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
  profil: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  nomHelperz: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
  notation: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  price: {
    backgroundColor: "#F94A56",
    borderRadius: 15,
    width: "40%",
    height: "60%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    backgroundColor: "#F94A56",
    borderRadius: 15,
    width: "40%",
    height: "60%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});
