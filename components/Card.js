import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

// accès à props "data" directement grace à la destructuration
// si type == "helperz" affiche la card helperz, sinon Annonces
export default function Card({ data, type, navigation }) {
	if (type === "helperz") {
		return (
			<TouchableOpacity
				onPress={() => navigation.navigate("Helperz", { user: data })}
				style={styles.card}
			>
				<Image
					source={{ uri: data.avatar }}
					style={styles.imageCard}
				/>
				<View style={styles.content}>
					<View style={styles.helperzName}>
						<Text style={styles.username}>{data.username}</Text>
						<Text style={styles.lastname}> {data.lastname}</Text>
					</View>
					<Text style={styles.location}>Lieu : {data.helperz.location.name}</Text>
					<Text style={styles.location}>Avis: {data.helperz.review}</Text>
				</View>
			</TouchableOpacity>
		);
	} else {
		//limiter la description des cards à un certains nombres de caractères
		const descriptionAnnonces = data.description;
		const description = descriptionAnnonces.split(".");
		return (
			<TouchableOpacity
				style={styles.card}
				onPress={() => navigation.navigate("Annonce", { id: data._id })}
			>
				<Image
					source={require("../assets/peoples-money.jpg")}
					style={styles.imageCard}
				/>
				<View style={styles.content}>
					<Text style={styles.title}>{data.title}</Text>
					<Text
						numberOfLines={3}
						style={styles.description}
					>
						{description[0]}.
					</Text>
				</View>
			</TouchableOpacity>
		);
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
		flex: 1,
		flexDirection: "column",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "black",
	},
	description: {
		fontSize: 12,
		color: "black",
	},
	helperzName: {
		flexDirection: "row",
	},
	username: {
		fontSize: 20,
		fontWeight: "bold",
		color: "black",
	},
	lastname: {
		fontSize: 20,
		color: "black",
	},
	location: {},
});
