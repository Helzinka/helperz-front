import React from "react";
import { useState } from "react";
import {
	SafeAreaView,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	KeyboardAvoidingView,
	Platform,
	StatusBar,
} from "react-native";
import Checkbox from "expo-checkbox";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { addPlace, removePlace } from "../reducers/user";

// const BACKEND_ADDRESS = 'http://BACKEND_IP:3000';

// Message explicatif pour remplir un annonce
const titreIntro = "Allons à l'essentiel";
const textIntro = "Un titre précis est le meilleur moyen pour vous faire remarquer par un Helper";
const question = "Quel est le titre de votre besoin ?";

// permet de mettre un titre et de renseignner son URL

export default function CreateAnnounce() {
	const [title, setTitle] = useState("");
	const [url, setUrl] = useState("");
	const [helperSelected, sethelperSelected] = useState(false);
	const [adviceSelected, setadviceSelected] = useState(false);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity>
					<FontAwesome
						name="arrow-left"
						size={20}
						color="#000000"
						style={styles.returnIcon}
					/>
				</TouchableOpacity>
				<Image source={require("../assets/Logo-Full-Black.png")} style={styles.logo} />
				<TouchableOpacity>
					<FontAwesome name="times" size={20} color="#000000" style={styles.deleteIcon} />
				</TouchableOpacity>
			</View>
			<Text style={styles.titleTop}>{titreIntro}</Text>
			<Text style={styles.textContent}>{textIntro}</Text>

			<Text style={styles.textContent}>{question}</Text>
			{/* <ScrollView keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
				<KeyboardAvoidingView styles={styles.inputContainer} enabled="false"> */}
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
			{/* </KeyboardAvoidingView>
			</ScrollView> */}
			<View style={styles.checkboxContainer}>
				<Text style={styles.textContent}>Je suis à la recherche de:</Text>
				<Checkbox
					value={helperSelected}
					onValueChange={sethelperSelected}
					style={styles.checkbox}
				/>
				<Checkbox
					value={adviceSelected}
					onValueChange={setadviceSelected}
					style={styles.checkbox}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	header: {
		flex: 0.15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		backgroundColor: "#00C6A0",
	},
	returnIcon: {
		marginLeft: 15,
	},
	logo: {
		width: "25%",
		resizeMode: "contain",
	},
	deleteIcon: {
		marginRight: 15,
	},
	textContent: {
		fontSize: 14,
		marginLeft: 15,
	},
	titleTop: {
		fontSize: 20,
		marginLeft: 15,
	},
	// inputContainer:{

	// }
	textInput: {
		height: 40,
		margin: 12,
		borderBottomWidth: 1,
		padding: 10,
		marginLeft: 15,
	},
	checkboxContainer: {
		flexDirection: "column",
		marginBottom: 20,
	},
	checkbox: {
		alignSelf: "center",
	},
});
