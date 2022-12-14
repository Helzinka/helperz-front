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
} from "react-native";
import Checkbox from "expo-checkbox";

export default function Profil() {
	// permet de mettre de renseigner Nom, prenom, age
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [age, setAge] = useState("");
	const [description, setDescription] = useState("");
	// checkbox compétence
	const [adviceSelected, setadviceSelected] = useState(false);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.userContainer}>
				<Text style={styles.title}>Présentation</Text>
				<View style={styles.presentation}>
					<Image
						style={styles.imageUser}
						source={require("../assets/Carrousel.jpg")}
					></Image>
					<View style={styles.inputContainer}>
						<TextInput
							style={styles.name}
							onChangeText={setName}
							value={name}
							placeholder="Entrer votre nom"
							keyboardType="default"
						/>
						<TextInput
							style={styles.surname}
							onChangeText={setSurname}
							value={surname}
							placeholder="Entrer votre prénom"
							keyboardType="default"
						/>
						<TextInput
							style={styles.age}
							onChangeText={setAge}
							value={age}
							placeholder="Entrer votre age"
							keyboardType="numeric"
						/>
					</View>
				</View>
				<View>
					<TextInput
						style={styles.description}
						onChangeText={setDescription}
						value={description}
						placeholder="Renseignez une description de 500 charactères max"
						keyboardType="numeric"
					/>
				</View>
			</View>

			<View style={styles.skillsContainer}>
				<Text style={styles.skills}>Compétences</Text>
				<View style={styles.checkbox}>
					<Checkbox value={adviceSelected} onValueChange={setadviceSelected} />
					<Text style={styles.textContent}>Beau</Text>
				</View>
			</View>
			<View style={styles.reviewContainer}>
				<Text style={styles.review}>Notes et commentaires</Text>
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
	userContainer: {
		flex: 0.5,
		backgroundColor: "pink",
		// 	height: "25%",
		// 	position: "relative",
		// },
		// imageback: {
		// 	flex: 0.2,
		// 	// height: "100%",
		// 	// width: "100%",

		// 	borderTopLeftRadius: "20px",
		// 	borderTopRightRadius: "20px",
	},
	presentation: {
		flex: 0.4,
		backgroundColor: "red",
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		marginStart: 15,
	},

	imageUser: {
		height: "50%",
		width: "25%",
		marginStart: 15,
	},
	inputContainer: {
		alignItems: "flex-start",
		marginStart: 15,
	},
	description: {
		marginStart: 15,
		marginEnd: 15,
	},

	skillsContainer: {
		flex: 0.3,
		backgroundColor: "green",
		//     flexDirection: "column",
		//     alignItems: "center",
		//     justifyContent: "space-around",
	},
	skills: {
		marginStart: 15,
		marginEnd: 15,
	},
	reviewContainer: {
		flex: 0.3,
		backgroundColor: "yellow",
	},
	review: {
		marginStart: 15,
		marginEnd: 15,
	},
});
