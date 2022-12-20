import {
	SafeAreaView,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Pressable,
	Image,
} from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Calendar from "../components/Calendar"
import { useEffect } from "react"
import { IP_LOCAL } from "@env"

export default function AnnonceFromHelperz({ navigation, route }) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.profilContainer}>
				<Image
					source={require("../assets/profil1.jpg")}
					style={styles.imageCard}
				/>
				<View style={styles.profilText}>
					<View style={styles.headerProfil}>
						<Text style={styles.textBio}>Julie</Text>
						<Text style={styles.textBio}>-</Text>
						<Text style={styles.textBio}>Bordeaux</Text>
					</View>
					<View style={styles.notationContainer}>
						<Text style={styles.notation}>
							Notes: 4.5/5 (
							<FontAwesomeIcon
								icon={faStar}
								size={12}
								color="#FFD700"
							></FontAwesomeIcon>
							)
						</Text>
					</View>
					<Text style={styles.descriptionText}>
						"Experte dans le domain immobilier. Ancienne agent immobilier durant 15 ans
						sur Bordeaux et ses alentours."
					</Text>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	profilContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	profilText: {
		flexDirection: "column",
		width: "60%",
	},
	photoContainer: {
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	imageCard: {
		width: "30%",
		height: "75%",
		borderRadius: 100,
	},
	textFilter: {
		fontSize: 12,
	},
	tagContainer: {
		flex: 0.3,
		fontSize: 12,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	filter: {
		width: "30%",
		height: "80%",
		backgroundColor: "#00C6A0",
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "space-evenly",
		margin: 4,
	},
	calendarContainer: {
		flex: 2,
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
		height: "25%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	textValidate: {
		fontSize: 14,
		color: "white",
		fontWeight: "bold",
	},
})
