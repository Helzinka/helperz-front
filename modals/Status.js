import { Modal, View, Text, Pressable, StyleSheet, StatusBar, Platform } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import Slider from "@react-native-community/slider";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Skills({ isVisible, onClose }) {
	// checkbox skills
	const [availableSelected, setAvailableSelected] = useState(false);
	const [notAvailableSelected, setNotAvailableSelected] = useState(true);
	console.log(availableSelected);

	return (
		<Modal animationType="slide" visible={isVisible}>
			<View style={styles.modal}>
				<View style={styles.headerContainer}>
					<Pressable onPress={onClose}>
						<FontAwesomeIcon
							icon={faArrowLeft}
							size={20}
							style={styles.close}
						></FontAwesomeIcon>
					</Pressable>
					<Text style={styles.titleSkill}>status</Text>
					<Pressable onPress={onClose}>
						<FontAwesome name="close" size={20} style={styles.close}></FontAwesome>
					</Pressable>
				</View>
				<View style={styles.skillMainContainer}>
					<View style={styles.skillContainer}>
						<View style={styles.hairlineContainer}>
							<View style={styles.hairline} />
							<Text style={styles.skill}>Selectionez votre statut</Text>
							<View style={styles.hairline} />
						</View>
						<View style={styles.checkboxContainer}>
							<View style={styles.checkbox}>
								<Checkbox
									value={availableSelected}
									onValueChange={setAvailableSelected}
								/>
								<Text style={styles.textContent}>Disponible</Text>
							</View>
							<View style={styles.checkbox}>
								<Checkbox
									value={notAvailableSelected}
									onValueChange={setNotAvailableSelected}
								/>
								<Text style={styles.textContent}>Non disponible</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
}
const styles = StyleSheet.create({
	modal: {
		flex: 1,
		paddingTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
		// justifyContent: "center",
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginStart: 15,
		marginEnd: 15,
		marginTop: 15,
	},
	titleSkill: {
		fontSize: 22,
		fontWeight: "bold",
	},
	skillMainContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	skillContainer: {
		justifyContent: "center",
		marginTop: 15,

		// borderColor: "black",
		// borderWidth: 2,
	},
	hairlineContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	hairline: {
		flex: 1,
		backgroundColor: "black",
		height: 2,
		marginLeft: 15,
		marginRight: 15,
		opacity: 0.5,
	},
	skill: {
		fontSize: 18,
		fontWeight: "bold",
	},
	checkboxContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	checkbox: {
		marginTop: 15,
		marginLeft: 15,

		flexDirection: "row",
	},
	textContent: {
		fontSize: 16,
		marginLeft: 5,
	},
});
