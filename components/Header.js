import {
	StyleSheet,
	TouchableOpacity,
	View,
	Image,
	SafeAreaView,
	StatusBar,
	Platform,
} from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default function Header({ navigation }) {
	const { top } = useSafeAreaInsets()

	return (
		<SafeAreaView style={{ ...styles.container }}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.navigate("Accueil")}>
					<Image
						style={styles.logo}
						source={require("../assets/logo-online.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.toggleDrawer()}>
					<FontAwesome
						name="bars"
						size={28}
						color="black"
						style={styles.menuIcon}
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		margin: 10,
		// paddingLeft: 10,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	logo: {
		width: 140,
		height: 60,
		// backgroundColor: "red",
		resizeMode: "cover",
	},
	menuIcon: {
		// backgroundColor: "blue",
		marginRight: 15,
	},
})
