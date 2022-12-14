import {
	SafeAreaView,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Calendar from "../components/Calendar";

export default function AnnonceFromHelperz({ navigation, route }) {
	const way = route.params.user;
	const location = way.helperz.location;
	const tags = way.helperz.skills;
	const disponibilite = () => {
		if (way.helperz.available) {
			return "Disponible";
		} else {
			return "Indisponible";
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.profilContainer}>
				<Image
					source={{ uri: way.avatar }}
					style={styles.imageCard}
				/>
				<View style={styles.profilText}>
					<View style={styles.headerProfil}>
						<Text style={styles.textBio}>{way.username}</Text>
						<Text style={styles.textBio}>{way.lastname}</Text>
						<Text style={styles.textBio}>-</Text>
						<Text style={styles.textBio}>{location.name}</Text>
					</View>
					<View style={styles.notationContainer}>
						<Text style={styles.notation}>
							Notes: {way.helperz.review} (
							<FontAwesomeIcon
								icon={faStar}
								size={12}
								color="#FFD700"
							></FontAwesomeIcon>
							)
						</Text>
					</View>
					<Text style={styles.descriptionText}>"{way.description}"</Text>
				</View>
			</View>

			<View style={styles.tagContainer}>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					<TouchableOpacity
						style={styles.filter}
						activeOpacity={0.8}
					>
						<Text style={styles.textFilter}>{disponibilite()}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.filter}
						activeOpacity={0.8}
					>
						<Text style={styles.textFilter}>{location.name}</Text>
					</TouchableOpacity>
					{tags.map((e) => {
						return (
							<TouchableOpacity
								style={styles.filter}
								activeOpacity={0.8}
							>
								<Text style={styles.textFilter}>{e}</Text>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</View>

			<View style={styles.calendarContainer}>
				<Calendar />
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.buttonValidate}
					onPress={() => navigation.navigate("Messagerie")}
				>
					<Text style={styles.textValidate}>Contacter</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
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
		justifyContent: "space-around",
		width: "65%",
		padding: 15,
	},
	headerProfil: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		margin: 5,
	},
	textBio: {
		fontSize: 20,
		fontWeight: "bold",
	},
	notationContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		margin: 5,
	},
	notation: {
		fontSize: 16,
	},
	descriptionText: {
		fontSize: 13,
		margin: 5,
		fontStyle: "italic",
	},
	photoContainer: {
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	imageCard: {
		width: "27%",
		height: "75%",
		borderRadius: 100,
		marginLeft: 9,
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
		width: 80,
		height: "80%",
		backgroundColor: "#00C6A0",
		borderRadius: 15,
		alignItems: "center",
		justifyContent: "space-evenly",
		margin: 4,
	},
	calendarContainer: {
		flex: 2.5,
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
});
