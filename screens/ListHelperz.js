import { useEffect, useState } from "react"
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	ScrollView,
	Pressable,
	TouchableOpacity,
} from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Card from "../components/Card"
import FilterModal from "../modals/Filter"
import mongodb from "../data.json"
// fake data mongodb
import { IP_LOCAL } from "@env"
import MapView, { Marker } from "react-native-maps"
import { useSelector } from "react-redux"

export default function Annonce({ navigation }) {
	const BASE_URL = `http://${IP_LOCAL}:3000`
	const [data, setData] = useState()
	const [initLocation, setInitLocation] = useState({})
	const [search, setSearch] = useState()
	const [isModalVisible, setIsModalVisible] = useState(false)
	const UserReducer = useSelector((state) => state.user.value)

	// affiche la modal au click de l'icon "+"
	const isVisible = () => {
		setIsModalVisible(!isModalVisible)
	}

	// ferme la modal au click dans la modal "quitter"
	const onClose = () => {
		setIsModalVisible(!isModalVisible)
	}
	// recupère les données à la création du composant depuis data.json
	useEffect(() => {
		// on récupère la première annnonce depuusi le reducer user
		let last = UserReducer.announces.length - 1
		const [lat, long] = [
			UserReducer.announces[last].location.lat,
			UserReducer.announces[last].location.long,
		]
		setInitLocation({ lat: lat, long: long })
		const announceLocation = UserReducer.announces[last].location.name
		// on précise le lieu de l'annonce et on fetch tout les helperz sur la meme ville
		fetch(`${BASE_URL}/users/helperz/${announceLocation}`)
			.then((response) => response.json())
			.then((data) => {
				setData(data)
			})
	}, [])

	// fonction pour retourner toutes les helperz via le composant "Card"
	// check si les données sont présente via if(data) !important
	const showAnnounce = () => {
		if (data) {
			return data.user.map((value, index) => (
				<Card
					key={index}
					data={value}
					type="helperz"
				/>
			))
		}
	}
	const showmarker = () => {
		if (data) {
			return data.user.map((value, index) => {
				const [lat, long] = [value.helperz.location.lat, value.helperz.location.long]
				console.log(lat, long)
				return (
					<Marker
						key={index}
						pinColor="red"
						coordinate={{ latitude: lat, longitude: long }}
						title={value.username}
					></Marker>
				)
			})
		}
	}

	return (
		<>
			<View style={styles.container}>
				<TextInput
					style={styles.search}
					onChangeText={setSearch}
					value={search}
					placeholder="Location"
				></TextInput>
				<View style={styles.filters}>
					<TouchableOpacity onPress={() => isVisible()}>
						<FontAwesome
							name="plus"
							size={20}
							style={styles.plus}
						></FontAwesome>
					</TouchableOpacity>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					>
						<Pressable style={styles.filter}>
							<Text>Paris</Text>
						</Pressable>
						<Pressable style={styles.filter}>
							<Text>Date</Text>
						</Pressable>
					</ScrollView>
				</View>
			</View>
			{initLocation && (
				<MapView
					region={{
						latitude: initLocation.lat,
						longitude: initLocation.long,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
					style={styles.mapView}
				>
					{showmarker()}
				</MapView>
			)}
			<View style={styles.announces}>{showAnnounce()}</View>
			<FilterModal
				isVisible={isModalVisible}
				onClose={() => onClose()}
			></FilterModal>
		</>
	)
}

const styles = StyleSheet.create({
	container: {},
	search: {
		alignSelf: "center",
		width: "70%",
		padding: 10,
		margin: 10,
		borderWidth: 1,
		borderColor: "grey",
	},
	filters: {
		margin: 10,
		display: "flex",
		flexDirection: "row",
	},
	filter: {
		backgroundColor: "#616161",
		borderRadius: 8,
		paddingRight: 8,
		paddingLeft: 8,
		paddingTop: 4,
		paddingBottom: 4,
		marginRight: 8,
	},
	plus: {
		marginLeft: 10,
		marginRight: 10,
	},
	announces: {
		flex: 1,
		alignItems: "center",
		marginTop: 20,
	},
	mapView: {
		flex: 2,
		height: "100%",
	},
})
