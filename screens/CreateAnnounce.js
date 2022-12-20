import React from "react"
import { useState, useRef } from "react"
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Tags from "react-native-tags"
import { useSelector, useDispatch } from "react-redux"
import { IP_LOCAL } from "@env"
import { addAnnouncesToUser } from "../reducers/user"

export default function CreateAnnounce({ navigation }) {
	// permet de mettre un titre et de renseignner son URL
	const BASE_URL = `http://${IP_LOCAL}:3000`
	const [title, setTitle] = useState("")
	const [url, setUrl] = useState("")
	const [price, setPrice] = useState("")
	const [description, setDescription] = useState("")
	const [tag, setTag] = useState([])
	const [city, setCity] = useState()
	const UserReducer = useSelector((state) => state.user.value)
	const dispatch = useDispatch()

	const handleSubmit = () => {
		fetch(`https://api-adresse.data.gouv.fr/search/?q=${city}`)
			.then((response) => response.json())
			.then((data) => {
				let infos = {}
				if (data) {
					let firstCity = data.features[0]
					infos = {
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
				}
				return fetch(`${BASE_URL}/announces`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(infos),
				})
					.then((response) => response.json())
					.then((data) => {
						if (data.result) {
							dispatch(addAnnouncesToUser(data.announces))
							navigation.navigate("Liste helperz")
						}
					})
			})
		// only for testing
		// navigation.navigate("Liste helperz")
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Crééz votre annonce</Text>
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
					placeholder="URL de votre annonce"
				/>
				<TextInput
					style={styles.textInput}
					value={price}
					onChangeText={setPrice}
					placeholder="Prix de la mission"
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
					placeholder="Localisation"
				/>

				<Text style={styles.textTag}>Ajouter un tag :</Text>
				<Tags
					onChangeTags={(tags) => setTag((tag) => [...tag, tags])}
					//   tagTextStyle={{ color: "red" }}
					containerStyle={{ justifyContent: "center" }}
					inputStyle={{
						backgroundColor: "white",
						borderRadius: 10,
						borderColor: "#00C6A0",
						borderWidth: 3,
					}}
					style={styles.tagContainer}
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
				activeOpacity={0.8}
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
		// width: "100%",
		alignItems: "center",
		backgroundColor: "white",
	},
	inputContainer: {
		flex: 0.9,
		width: "90%",
	},
	textInput: {
		height: 40,
		margin: 12,
		borderBottomWidth: 1,
		padding: 10,
		marginLeft: 15,
		borderColor: "#00C6A0",
	},
	title: {
		fontWeight: "bold",
		fontSize: 22,
		margin: 20,
	},
	button: {
		height: "7%",
		width: "90%",
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		backgroundColor: "#00C6A0",
		marginTop: "70%",
	},
	valider: {
		fontSize: 18,
		fontWeight: "bold",
		color: "white",
	},
	tagContainer: {
		marginTop: "2%",
	},
	textTag: {
		fontSize: 14,
		marginTop: 15,
	},
	tag: {
		// marginRight: 10,
		padding: 10,
		backgroundColor: "#00C6A0",
		borderRadius: 10,
	},
})
