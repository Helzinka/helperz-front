import { Image, StyleSheet } from "react-native"

export default function MapScreen() {
	return (
		<Image
			source={require("../assets/adaptive-icon.png")}
			style={styles.map}
		/>
	)
}

const styles = StyleSheet.create({
	map: {
		width: "100%",
		height: "100%",
	},
})
