import { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	ScrollView,
	Pressable,
	TouchableOpacity,
} from "react-native";
import { IP_LOCAL } from "@env";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Card from "../components/Card";
import FilterModal from "../modals/Filter";

export default function Annonce({ navigation, route }) {
	const BASE_URL = `http://${IP_LOCAL}:3000`;
	const [data, setData] = useState();
	const [search, setSearch] = useState();
	const [isModalVisible, setIsModalVisible] = useState(false);

	// affiche la modal au click de l'icon "+"
	const isVisible = () => {
		setIsModalVisible(!isModalVisible);
	};

	// ferme la modal au click dans la modal "quitter"
	const onClose = () => {
		setIsModalVisible(!isModalVisible);
	};
	// recupère les données à la création du composant depuis data.json sans filtre location
	useEffect(() => {
		fetch(`${BASE_URL}/announces`)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			});
	}, []);

	// fonction pour retourner toutes les annonces via le composant "Card"
	// check si les données sont présente via if(data) !important
	const showAnnounce = () => {
		if (data) {
			return data.data.map((value, index) => (
				<Card navigation={navigation} key={index} data={value} />
			));
		}
	};

	return (
		<>
			<View style={styles.container}>
				<TextInput
					style={styles.search}
					onChangeText={setSearch}
					value={search}
					placeholder="search"
				></TextInput>
				<View style={styles.filters}>
					<TouchableOpacity onPress={() => isVisible()}>
						<FontAwesome name="plus" size={20} style={styles.plus}></FontAwesome>
					</TouchableOpacity>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<Pressable style={styles.filter}>
							<Text>Paris</Text>
						</Pressable>
						<Pressable style={styles.filter}>
							<Text>Date</Text>
						</Pressable>
					</ScrollView>
				</View>
			</View>
			<ScrollView style={styles.ScrollView}>
				<View style={styles.announces}>{showAnnounce()}</View>
				<FilterModal isVisible={isModalVisible} onClose={() => onClose()}></FilterModal>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
	},
	search: {
		alignSelf: "center",
		width: "85%",
		padding: 10,
		margin: 10,
		borderRadius: 10,
		backgroundColor: "white",
		borderRadius: 10,
		borderColor: "#00C6A0",
		borderWidth: 3,
	},
	filters: {
		margin: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "white",
	},
	filter: {
		backgroundColor: "#00C6A0",
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
		backgroundColor: "white",
	},
	ScrollView: {
		backgroundColor: "white",
	},
});
