import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import Card from "../components/Card"
import mongodb from "../data.json"
// fake data mongodb

export default function Annonce({ navigation }) {
	const [data, setData] = useState()

	// recupère les données à la création du composant depuis data.json
	useEffect(() => {
		setData(mongodb)
	}, [])

	// fonction pour retourner toutes les annonces via le composant "Card"
	// check si les données sont présente via if(data) !important
	const showAnnounce = () => {
		if (data) {
			return data.announce.map((value, index) => (
				<Card
					key={index}
					data={value}
				/>
			))
		}
	}

	return (
		<>
			<View style={styles.filter}>
				<Text>filtre</Text>
			</View>
			<View style={styles.announces}>{showAnnounce()}</View>
		</>
	)
}

const styles = StyleSheet.create({
	filter: {
		flex: 1,
		alignItems: "center",
	},
	announces: {
		flex: 3,
		alignItems: "center",
	},
})
