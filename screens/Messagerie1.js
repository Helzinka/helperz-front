import {
	SafeAreaView,
	KeyboardAvoidingView,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Text,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Messagerie() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<View style={styles.input}>
				<TextInput placeholder="Votre message ..." style={styles.inputMessage} />
				<TouchableOpacity>
					<FontAwesome name="arrow-right" size={20} style={styles.arrow} />
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column-reverse",
	},
	input: {
		backgroundColor: "#00C6A0",
		height: "11%",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	inputMessage: {
		width: "80%",
		backgroundColor: "white",
		height: "50%",
		borderRadius: 10,
		padding: 5,
	},
	arrow: {
		color: "white",
	},
});
