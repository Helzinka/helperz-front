import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDebugValue, useEffect, useState } from "react";
import { IP_LOCAL } from "@env";

import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function PageAnnonce({ navigation, route }) {
	const BASE_URL = `http://${IP_LOCAL}:3000`;

	const [data, setData] = useState();

	// recupère les données à l'ouverture de la page depuis data.json sans filtre location
	// useEffect(() => {
	//   fetch(`${BASE_URL}/announces/${route.params.id}`)
	//     .then((response) => response.json())
	//     .then((data) => {
	//       let date = new Date(data.data.createdAt);
	//       let test = date.toLocaleDateString("fr-FR");
	//       data.data.createdAt = test;
	//       setData(data);
	//     });
	// }, []);

	return (
		<SafeAreaView style={styles.container}>
			{/* {data && (
        <>
          <View style={styles.annonceContainer}>
            <Text style={styles.titreAnnonce}>{data.data.title}</Text>
            <Text style={styles.textAnnonce}>{data.data.description}</Text>
          </View>

          <MapView
            region={{
              latitude: data.data.location.lat,
              longitude: data.data.location.long,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={styles.mapView}
          >
            <Marker
              pinColor="red"
              coordinate={{
                latitude: data.data.location.lat,
                longitude: data.data.location.long,
              }}
              title={data.data.title}
            ></Marker>
          </MapView>

          <View style={styles.priceDateContainer}>
            <View style={styles.price}>
              <Text style={styles.text}>{data.data.price}€</Text>
            </View>
            <View style={styles.calendar}>
              <Text style={styles.text}>{data.data.createdAt}</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Annonces validées", { id: data.data._id })
              }
              style={styles.buttonValidate}
            >
              <Text style={styles.textValidate}>Accepter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContact}
              onPress={() => navigation.navigate("Messagerie")}
            >
              <Text style={styles.textValidate}>Contacter</Text>
            </TouchableOpacity>
          </View>
        </> */}
			{/* )} */}
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
		color: "white",
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
