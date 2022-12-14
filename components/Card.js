import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native"

// accès à props "data" directement grace à la destructuration
export default function Card({ data }) {
	return (
		<TouchableOpacity style={styles.card}>
			<Image
				source={require("../assets/Logo-Full-Black.png")}
				style={styles.imageCard}
			/>
			<View style={styles.content}>
				<Text style={styles.title}>{data.title}</Text>
				<Text style={styles.descritption}>{data.descritption}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	card: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		width: "80%",
		marginBottom: 10,
	},
	imageCard: {
		height: 50,
		width: 50,
	},
	content: {
		padding: 10,
		display: "flex",
		flexDirection: "column",
	},
	title: {
		fontSize: 26,
		color: "#616161",
	},
	descritption: {
		fontSize: 12,
		color: "#8e8e8e",
	},
})
