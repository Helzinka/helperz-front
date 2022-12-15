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

export default function Annonce({ navigation }) {
	const [data, setData] = useState()
	const [search, setSearch] = useState()
	const [isModalVisible, setIsModalVisible] = useState(false)

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
		setData(mongodb)
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
})
