import React from "react"
import { useState, useRef } from "react"
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Checkbox from "expo-checkbox"
import Tags from "react-native-tags"
import { useSelector } from "react-redux"
import { IP_LOCAL } from "@env"

export default function CreateAnnounce() {
	// permet de mettre un titre et de renseignner son URL
	const BASE_URL = `http://${IP_LOCAL}:3000`
	const [title, setTitle] = useState("")
	const [url, setUrl] = useState("")
	const [price, setPrice] = useState("")
	const [description, setDescription] = useState("")
	const [tag, setTag] = useState([])
	const [city, setCity] = useState()
	const UserReducer = useSelector((state) => state.user.value)

	const handleSubmit = () => {
		fetch(`https://api-adresse.data.gouv.fr/search/?q=${city}`)
			.then((response) => response.json())
			.then((data) => {
				let firstCity = data.features[0]
				const infos = {
					title: title,
					url: url,
					price: Number(price),
					description: description,
					tag: tag[0],
					// vraie comportement
					// userOwner : UserReducer.user.id
					// user "Test" => 639f238251b4d699e1473f29
					userOwner: "639f238251b4d699e1473f29",
					location: {
						name: firstCity.properties.city,
						lat: firstCity.geometry.coordinates[1],
						long: firstCity.geometry.coordinates[0],
					},
				}
				return fetch(`${BASE_URL}/announces`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(infos),
				})
					.then((response) => response.json())
					.then((data) => {
						console.log(data)
					})
			})
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Création D'annonce</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					value={title}
					onChangeText={setTitle}
					placeholder="Titre de l'annonce"
				/>
				<TextInput
					style={styles.textInput}
					value={url}
					onChangeText={setUrl}
					placeholder="Url de votre annonce"
				/>
				<TextInput
					style={styles.textInput}
					value={price}
					onChangeText={setPrice}
					placeholder="Prix demandé"
				/>
				<TextInput
					style={styles.textInput}
					value={description}
					onChangeText={setDescription}
					placeholder="Description"
				/>
				<TextInput
					style={styles.textInput}
					value={city}
					onChangeText={setCity}
					placeholder="ville"
				/>

				<Tags
					onChangeTags={(tags) => setTag((tag) => [...tag, tags])}
					tagTextStyle={{ color: "red" }}
					containerStyle={{ justifyContent: "center" }}
					inputStyle={{ backgroundColor: "whtie" }}
					renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
						<TouchableOpacity
							key={`${tag}-${index}`}
							onPress={onPress}
						>
							<View style={styles.tag}>
								<Text>{tag}</Text>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>

			<TouchableOpacity
				style={styles.button}
				onPress={() => handleSubmit()}
			>
				<Text style={styles.valider}>Valider</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
	},
	inputContainer: {
		width: "80%",
	},
	title: {
		fontWeight: "bold",
		fontSize: 25,
		marginLeft: 15,
	},

	textContent: {
		fontSize: 14,
		marginLeft: 15,
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
	tag: {
		marginRight: 10,
		padding: 5,
		backgroundColor: "#ccc",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
})
