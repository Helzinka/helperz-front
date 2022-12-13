import { useState } from "react"
import {
	Text,
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native"

export default function MapScreen() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = () => {
		// console.log(email, password)
		// use reducer
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<View style={styles.inputContainer}>
				<View style={styles.email}>
					<Text style={styles.email_title}>Email</Text>
					<TextInput
						style={styles.input}
						value={email}
						onChangeText={(value) => setEmail(value)}
						keyboardType="email-address" // https://reactnative.dev/docs/textinput#keyboardtype
						textContentType="emailAddress" // https://reactnative.dev/docs/textinput#textcontenttype-ios
						autoComplete="email" // https://reactnative.dev/docs/textinput#autocomplete-android
					/>
				</View>
				<View style={styles.password}>
					<Text style={styles.password_title}>Password</Text>
					<TextInput
						style={styles.input}
						value={password}
						onChangeText={(value) => setPassword(value)}
						secureTextEntry={true}
						textContentType="password" // https://reactnative.dev/docs/textinput#textcontenttype-ios
						autoComplete="password" // https://reactnative.dev/docs/textinput#autocomplete-android
					/>
				</View>
				<TouchableOpacity
					onPress={() => handleSubmit()}
					style={styles.submit}
					activeOpacity={0.8}
				>
					<Text style={styles.textButton}>Login</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	inputContainer: {
		width: "50%",
	},
	email: {
		marginBottom: 20,
	},
	input: {
		borderBottomColor: "#000000",
		borderBottomWidth: 1,
		height: 30,
		fontSize: 16,
		marginTop: 5,
	},
	submit: {
		alignItems: "center",
		marginTop: 30,
		padding: 10,
		width: "100%",
		backgroundColor: "#fbe29c",
		borderRadius: 8,
	},
})
