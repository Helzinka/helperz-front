import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { IP_LOCAL } from "@env";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function AnnonceRecap({ navigation, route }) {
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
					<View style={styles.validationContainer}>
						<Text style={styles.titrePage}>Statut de la mission</Text>
						<View style={styles.buttonValidate}>
							<Text style={styles.textValidate}>Validé</Text>
						</View>
					</View>

					<View style={styles.recapMission}>
						<Text style={styles.titreAnnonce}>{data.data.title}</Text>
						<Text style={styles.textAnnonce}>{data.data.description}</Text>
					</View>

					<TouchableOpacity
						style={styles.profilContainer}
						onPress={() => navigation.navigate("Messagerie")}
					>
						<View style={styles.photo}>
							<View
								style={styles.avatar}
								activeOpacity={0.8}
							>
								<FontAwesome
									name="user"
									size={50}
									color={"white"}
								/>
							</View>
						</View>
						<View style={styles.profil}>
							<Text style={styles.nomHelperz}>Profile</Text>
							<Text>
								{data.data.userOwner.username + " " + data.data.userOwner.lastname}
							</Text>
							<Text>{data.data.userOwner.helperz.location.name} </Text>
						</View>
					</TouchableOpacity>

					<View style={styles.buttonContainer}>
						<View style={styles.price}>
							<Text style={styles.text}>{data.data.price} €</Text>
						</View>
						<View style={styles.calendar}>
							<Text style={styles.text}>{data.data.createdAt}</Text>
						</View>
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
		height: "35%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	textValidate: {
		fontSize: 16,
		color: "white",
		fontWeight: "bold",
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
});
