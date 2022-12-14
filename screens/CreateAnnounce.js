import React from "react";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";

// Message explicatif pour remplir un annonce
const titreIntro = "Allons à l'essentiel";
const textIntro = "Un titre précis est le meilleur moyen pour vous faire remarquer par un Helper";
const question = "Quel est le titre de votre besoin ?";

export default function CreateAnnounce() {
	// permet de mettre un titre et de renseignner son URL
	const [title, setTitle] = useState("");
	const [url, setUrl] = useState("");
	const [helperSelected, sethelperSelected] = useState(false);
	const [adviceSelected, setadviceSelected] = useState(false);

	const handleSubmit = () => {};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.titleTop}>{titreIntro}</Text>
				<Text style={styles.textContent}>{textIntro}</Text>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.textQuestion}>{question}</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={setTitle}
					value={title}
					placeholder="less than 50 character"
					keyboardType="default"
				/>
				<TextInput
					style={styles.textInput}
					onChangeText={setUrl}
					value={url}
					placeholder="copy your URL product"
					keyboardType="url"
				/>
			</View>

			<View style={styles.checkboxContainer}>
				<Text style={styles.textContent}>Je suis à la recherche :</Text>
				<View style={styles.checkbox}>
					<Checkbox value={helperSelected} onValueChange={sethelperSelected} />
					<Text style={styles.textContent}>un Helper</Text>
				</View>
				<View style={styles.checkbox}>
					<Checkbox value={adviceSelected} onValueChange={setadviceSelected} />
					<Text style={styles.textContent}>un conseil</Text>
				</View>
			</View>

			<TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
				<Text style={styles.valider}>Valider</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		justifyContent: "space-around",
	},
	textContainer: {
		flex: 0.2,
		// backgroundColor: "yellow",
		justifyContent: "space-around",
	},

	deleteIcon: {
		marginRight: 15,
	},
	textContent: {
		fontSize: 14,
		marginLeft: 15,
	},
	titleTop: {
		fontWeight: "bold",
		fontSize: 25,
		marginLeft: 15,
	},
	inputContainer: {
		// backgroundColor: "green",
	},
	textQuestion: {
		fontSize: 14,
		marginLeft: 15,
		fontWeight: "bold",
	},
	textInput: {
		height: 40,
		margin: 12,
		borderBottomWidth: 1,
		padding: 10,
		marginLeft: 15,
	},
	checkboxContainer: {
		flex: 0.2,
		width: "100%",
		// backgroundColor: "red",
		flexDirection: "column",
	},
	checkbox: {
		flexDirection: "row",
		alignSelf: "flex-start",

		left: "150%",
		paddingTop: 10,
		justifyContent: "space-between",
	},

	button: {
		height: 30,
		width: "40%",
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: "#00C6A0",
		marginBottom: 20,
	},
	valider: {
		fontSize: 18,
		fontWeight: "bold",
	},
});
