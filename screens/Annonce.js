import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDebugValue, useEffect, useState } from "react";
import { IP_LOCAL } from "@env";

import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function PageAnnonce({ navigation, route }) {
	const BASE_URL = `http://${IP_LOCAL}:3000`;

	const [data, setData] = useState();

	// recupère les données à l'ouverture de la page depuis data.json sans filtre location
	useEffect(() => {
		fetch(`${BASE_URL}/announces/id/${route.params.id}`)
			.then((response) => response.json())
			.then((data) => {
				let date = new Date(data.data.createdAt);
				let test = date.toLocaleDateString("fr-FR");
				data.data.createdAt = test;
				setData(data);
			});
	}, [route]);

	return (
		<SafeAreaView style={styles.container}>
			{data && (
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
							<Text style={styles.text}>{data.data.price} €</Text>
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
				</>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
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
		marginBottom: 20,
	},
	priceDateContainer: {
		flex: 0.5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	price: {
		backgroundColor: "#FA003F",
		borderRadius: 15,
		width: "43%",
		height: "60%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	calendar: {
		backgroundColor: "#FA003F",
		borderRadius: 15,
		width: "43%",
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
		height: "25%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.19,
		shadowRadius: 5.62,
		elevation: 6,
	},
	textValidate: {
		fontSize: 16,
		color: "white",
		fontWeight: "bold",
	},
	buttonContact: {
		backgroundColor: "#006EFF",
		borderRadius: 15,
		width: "90%",
		height: "25%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.19,
		shadowRadius: 5.62,
		elevation: 6,
	},
});
