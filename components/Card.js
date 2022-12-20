import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"

// accès à props "data" directement grace à la destructuration
// si type == "helperz" affiche la card helperz, sinon annonces
export default function Card({ data, type }) {
	if (type === "helperz") {
		return (
			<TouchableOpacity style={styles.card}>
				<Image
					source={require("../assets/profil2.jpg")}
					style={styles.imageCard}
				/>
				<View style={styles.content}>
					<Text style={styles.username}>{data.username}</Text>
					<Text style={styles.lastname}>{data.lastname}</Text>
					<Text style={styles.location}> lieu : {data.helperz.location.name}</Text>
				</View>
			</TouchableOpacity>
		)
	} else {
		return (
			<TouchableOpacity style={styles.card}>
				<Image
					source={require("../assets/profil2.jpg")}
					style={styles.imageCard}
				/>
				<View style={styles.content}>
					<Text style={styles.title}>{data.title}</Text>
					<Text style={styles.descritption}>{data.descritption}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	card: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		width: "90%",
		marginBottom: 20,
	},
	imageCard: {
		height: 80,
		width: 80,
		borderRadius: 90,
		marginRight: 15,
	},
	content: {
		// padding: 10,
		flex: 1,
		flexDirection: "column",
	},
	title: {
		fontSize: 20,
		color: "#616161",

		fontWeight: "bold",
		color: "black",
	},
	descritption: {
		fontSize: 12,
		color: "#8e8e8e",

		color: "black",
	},
})
