import {
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	Image,
	SafeAreaView,
	StatusBar,
	Platform,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Header(props) {
	return (
		<SafeAreaView style={{ ...styles.container }}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => props.navigation.navigate("Accueil")}>
					<Image
						style={styles.logo}
						source={require("../assets/logo-online.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
					<FontAwesome
						name="bars"
						size={28}
						color="black"
						style={styles.menuIcon}
					/>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
	},
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
});
