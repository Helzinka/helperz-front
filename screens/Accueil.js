import { useEffect } from "react"
import { SafeAreaView, StyleSheet, Image, View, TouchableOpacity, Text } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { IP_LOCAL } from "@env"
import { sign, addAllAnnounces } from "../reducers/user"

export default function HomeScreen({ navigation }) {
	const dispatch = useDispatch()
	const userReducer = useSelector((state) => state.user.value)
	const BASE_URL = `http://${IP_LOCAL}:3000`

	// auto log with test user
	useEffect(() => {
		fetch(`${BASE_URL}/users/signin`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: "jim@ok.com",
				password: "toto",
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result) {
					dispatch(sign(data.user))
					const userToken = data.user.token
					return fetch(`${BASE_URL}/users/announces/${userToken}`)
						.then((response) => response.json())
						.then((data) => {
							if (data.result) {
								dispatch(addAllAnnounces(data.announces))
							}
						})
				}
			})
	}, [])

	const handleLogin = () => {
		if (userReducer.user.token) {
			navigation.navigate("Création annonce")
		} else {
			navigation.navigate("Connexion")
		}
	}
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require("../assets/Carrousel.jpg")}
				style={styles.carrousel}
			/>
			<View style={styles.content}>
				<TouchableOpacity
					style={styles.card}
					activeOpacity={0.8}
					onPress={() => handleLogin()}
				>
					{/* <FontAwesomeIcon
            icon={faShop}
            size={50}
            color={"red"}
          ></FontAwesomeIcon> */}
					<Image
						source={require("../assets/annonce.png")}
						style={styles.imageCard}
					/>
					<View style={styles.textCard}>
						<Text style={styles.titreCard}>Créez une annonce</Text>
						<Text style={styles.textContent}>
							Trouvez un.e Helperz qui vous accompagnera lors de votre achat
						</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.card}
					activeOpacity={0.8}
					onPress={() => navigation.navigate("Liste des Helperz")}
				>
					<Image
						source={require("../assets/trouver.png")}
						style={styles.imageCard}
					/>
					<View style={styles.textCard}>
						<Text style={styles.titreCard}>Trouvez un Helperz</Text>
						<Text style={styles.textContent}>
							Nous vous mettons en relation avec des experts pour vos achats
						</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.card}
					activeOpacity={0.8}
					onPress={() => navigation.navigate("Liste des annonces")}
				>
					<Image
						source={require("../assets/money.png")}
						style={styles.imageCard}
					/>
					<View style={styles.textCard}>
						<Text style={styles.titreCard}>Faites vous rémunérer</Text>
						<Text style={styles.textContent}>
							Gagnez de l'argent dès que vous réalisez une mission
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	carrousel: {
		flex: 1.9,
		width: "100%",
		height: "50%",
	},
	content: {
		flex: 3,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	card: {
		flexDirection: "row",
		width: "90%",
		height: "28%",
		alignItems: "center",
		justifyContent: "space-between",
		shadowColor: "#000000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.19,
		shadowRadius: 5.62,
		elevation: 6,
	},
	imageCard: {
		width: "30%",
		height: "100%",
		borderBottomLeftRadius: 20,
		borderTopLeftRadius: 20,
	},
	textCard: {
		backgroundColor: "#00C6A0",
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		// borderWidth: 2,
		// borderColor: "#00C6A0",
		width: "68%",
		height: "100%",
		flexDirection: "column",
		justifyContent: "space-evenly",
		alignItems: "center",
		padding: 5,
	},
	titreCard: {
		fontWeight: "bold",
		fontSize: 22,
		color: "white",
	},
	textContent: {
		fontSize: 14,
		color: "white",
	},
})
