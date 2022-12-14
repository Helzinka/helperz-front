import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function PageAnnonce() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.annonceContainer}>
        <Text style={styles.titreAnnonce}>Titre de l'annonce</Text>
        <Text style={styles.textAnnonce}>
          Lorem ipsum dolor sit amet. In atque quia ut dignissimos quasi est
          vero placeat ut consectetur animi non galisum doloremque vel unde
          velit. Id galisum quod quo similique minus qui sunt sint eum debitis
          impedit 33 necessitatibus itaque 33 voluptates laboriosam et neque
          inventore.
        </Text>
      </View>

      <MapView
        initialRegion={{
          latitude: 48.862725,
          longitude: 2.287592,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.mapView}
      />

      <View style={styles.priceDateContainer}>
        <View style={styles.price}>
          <Text style={styles.text}>50€</Text>
        </View>
        <View style={styles.calendar}>
          <Text style={styles.text}>23/12/2022</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonValidate}>
          <Text style={styles.textValidate}>Accepter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContact}>
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
  annonceContainer: {
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
  mapView: {
    flex: 1,
    backgroundColor: "green",
  },
  priceDateContainer: {
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
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonValidate: {
    backgroundColor: "#00C6A0",
    borderRadius: 15,
    width: "90%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textValidate: {
    fontSize: 14,
  },
  buttonContact: {
    backgroundColor: "#006EFF",
    borderRadius: 15,
    width: "90%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
