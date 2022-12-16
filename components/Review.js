import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function () {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.messageContainer}>
				<View style={styles.profilHelper}>
					<View style={styles.photoContainer}>
						<TouchableOpacity style={styles.avatar} activeOpacity={0.8}>
							<FontAwesome name="user" size={30} color={"black"} />
						</TouchableOpacity>
					</View>
					<View>
						<View style={styles.textContent}>
							<Text>Robert </Text>
							<Text>BIRMAN</Text>
						</View>
						<View style={styles.notation}>
							<FontAwesome name="star" size={15} color={"#f1c40f"} />
							<FontAwesome name="star" size={15} color={"#f1c40f"} />
							<FontAwesome name="star" size={15} color={"#f1c40f"} />
							<FontAwesome name="star" size={15} color={"#f1c40f"} />
							<FontAwesome name="star" size={15} color={"#f1c40f"} />
							<Text style={styles.textNote}>5 sur 5</Text>
						</View>
						<View style={styles.dateReceptionMessage}>
							<Text style={styles.styleDate}>Date de réception du message</Text>
						</View>
					</View>
				</View>

				<View style={styles.previewContainer}>
					<Text>Preview du commentaire de l'Helper</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	messageContainer: {
		flex: 1,
		margin: 10,
		borderWidth: 1,
		borderRadius: 10,
		padding: 5,
		borderColor: "black",
		justifyContent: "center",
	},
	profilHelper: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	textContent: {
		// backgroundColor: "yellow",
		fontSize: 14,
		flexDirection: "row",
		letterSpacing: 100,
	},
	photoContainer: {
		margin: 8,
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 90,
		borderWidth: 1,
		borderColor: "black",
		// backgroundColor: "#006EFF",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	notation: {
		flexDirection: "row",

		alignItems: "center",
	},
	textNote: {
		fontSize: 10,
		marginLeft: 15,
		opacity: 0.5,
	},
	previewContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",

		height: "25%",
		margin: 10,
		borderRadius: 10,
		backgroundColor: "#DAD7D6",
	},
	dateReceptionMessage: {
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	styleDate: {
		fontSize: 10,
	},
});
