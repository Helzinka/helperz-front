import React from "react";
import { useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
	ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import SkillsModal from "../modals/Skills";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// pour importer des icons du site fontawesome il faut remplacer les - par des maj et ajouter fa au début du mot
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import Review from "../components/Review";

export default function Profil() {
	// permet de mettre de renseigner Nom, prenom, age
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [age, setAge] = useState("");
	const [description, setDescription] = useState("");
	const [isModalVisible, setIsModalVisible] = useState(false);

	// affiche la modal au click de l'icon "+"
	const isVisible = () => {
		setIsModalVisible(!isModalVisible);
	};

	// ferme la modal au click dans la modal "quitter"
	const onClose = () => {
		// console.log("ok");
		setIsModalVisible(!isModalVisible);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.userContainer}>
				<Text style={styles.titleUser}>Présentation</Text>
				<View style={styles.presentation}>
					<Image
						style={styles.imageUser}
						source={require("../assets/Carrousel.jpg")}
					></Image>

					<View style={styles.inputContainer}>
						<TextInput
							style={styles.textContent}
							onChangeText={setName}
							value={name}
							placeholder="Entrer votre nom"
							keyboardType="default"
						/>
						<TextInput
							style={styles.textContent}
							onChangeText={setSurname}
							value={surname}
							placeholder="Entrer votre prénom"
							keyboardType="default"
						/>
						<TextInput
							style={styles.textContent}
							onChangeText={setAge}
							value={age}
							placeholder="Entrer votre age"
							keyboardType="numeric"
						/>
					</View>
				</View>
				<View style={styles.descriptionContainer}>
					<TextInput
						style={styles.description}
						onChangeText={setDescription}
						value={description}
						placeholder="Renseignez une description de 500 charactères max"
						keyboardType="default"
					/>
				</View>
			</View>

			<View style={styles.skillContainer}>
				<View style={styles.skill}>
					<Text style={styles.titleSkill}>Compétences</Text>
					<TouchableOpacity style={styles.buttonSkills} onPress={() => isVisible()}>
						<FontAwesomeIcon
							icon={faMagnifyingGlassPlus}
							size={18}
							color="black"
							style={styles.imageSkill}
						></FontAwesomeIcon>
						<SkillsModal
							isVisible={isModalVisible}
							onClose={() => onClose()}
						></SkillsModal>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.reviewContainer}>
				<Text style={styles.review}>Notes et commentaires</Text>
				<ScrollView>
					<Review />
					<Review />
					<Review />
					<Review />
					<Review />
					<Review />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		flexDirection: "column",
		// justifyContent: "space-between",

		// height: "60%",
		// border: "solid",
		// transform: "matrix3d()",
		// boxShadow: "5px 5px rgb(63, 63, 63)",
		// borderWidth: "1px",
		// borderColor: "black",
		// borderRadius: "20px",
	},
	textContent: {
		fontSize: 14,
		marginLeft: 15,
	},

	userContainer: {
		flex: 0.4,
		// backgroundColor: "pink",
	},

	presentation: {
		flex: 0.45,
		// backgroundColor: "red",
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
	},
	titleUser: {
		fontSize: 30,
		fontWeight: "bold",
		marginStart: 15,
	},

	imageUser: {
		height: 100,
		width: 100,
		marginStart: 15,
		borderWidth: 1,
		borderColor: "black",
		border: "solid",
		borderRadius: 50,
	},
	inputContainer: {
		alignItems: "flex-start",
		marginStart: 15,
	},
	descriptionContainer: {
		flex: 0.45,
	},
	description: {
		class: "box",
		height: "100%",
		fontSize: 14,
		marginTop: 15,
		marginStart: 15,
		marginEnd: 15,
		textAlign: "center",
		borderWidth: 0.5,
		borderColor: "black",
		borderRadius: 10,

		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: -5,
		// 	height: 2,
		// },
		// shadowOpacity: 0.25,
		// shadowRadius: 6,

		// elevation: 5,

		// 	shadowColor: "black",
		// 	shadowOpacity: 0.2,
		// 	elevation: 10,
	},

	skillContainer: {
		flex: 0.3,

		// backgroundColor: "green",
		//     flexDirection: "column",
		//     alignItems: "center",
		//     justifyContent: "space-around",
	},
	skill: {
		flexDirection: "row",
		marginTop: 10,
	},
	titleSkill: {
		fontSize: 18,
		fontWeight: "bold",
		marginStart: 15,
		marginEnd: 15,
	},
	imageSkill: {
		marginTop: 5,
	},
	checkbox: {
		flexDirection: "row",
		// alignSelf: "flex-start",
		marginStart: 15,
		paddingTop: 10,
		// justifyContent: "space-between",
	},
	reviewContainer: {
		flex: 0.3,
		// backgroundColor: "yellow",
	},
	review: {
		fontSize: 18,
		fontWeight: "bold",
		marginStart: 15,
		marginEnd: 15,
	},
});
