import { useState, useEffect } from "react"
import {
	Text,
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native"
import * as Google from "expo-auth-session/providers/google"
import { GOOGLE_ID } from "@env"

export default function Login({ navigation }) {
	const [request, response, promptAsync] = Google.useAuthRequest({
		expoClientId: GOOGLE_ID,
	})
	const [singnin, setSignin] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [username, setUsername] = useState("")

	const handleSubmit = () => {
		// console.log(email, password)
		// use reducer
		// navigation.navigate("Home")
	}

	useEffect(() => {
		if (response?.type === "success") {
			const { authentication } = response
		}
	}, [response])

	const handleConnection = () => {
		if (singnin) {
			return (
				<>
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
						<Text style={styles.textButton}>Sign in</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setSignin(!singnin)}>
						<Text style={styles.changeConnectionType}>Sign in ?</Text>
					</TouchableOpacity>
				</>
			)
		} else {
			return (
				<>
					<View style={styles.username}>
						<Text style={styles.username}>username</Text>
						<TextInput
							style={styles.input}
							value={username}
							onChangeText={(value) => setUsername(value)}
						/>
					</View>
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
						<Text style={styles.textButton}>Sign Up</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setSignin(!singnin)}>
						<Text style={styles.changeConnectionType}>Sign up ?</Text>
					</TouchableOpacity>
				</>
			)
		}
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}
		>
			<View style={styles.sso}>
				<TouchableOpacity
					disabled={!request}
					style={styles.googleButton}
					onPress={() => {
						promptAsync()
					}}
				>
					<Text>Google</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.inputContainer}>{handleConnection()}</View>
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
	sso: {
		marginBottom: 20,
	},
	googleButton: {
		alignItems: "center",
		marginTop: 30,
		padding: 10,
		width: "100%",
		backgroundColor: "#fbe29c",
		borderRadius: 8,
	},
	inputContainer: {
		width: "50%",
	},
	input: {
		borderBottomColor: "#000000",
		borderBottomWidth: 1,
		height: 30,
		fontSize: 16,
		marginTop: 5,
		marginBottom: 20,
	},
	submit: {
		alignItems: "center",
		marginTop: 30,
		padding: 10,
		width: "100%",
		backgroundColor: "#fbe29c",
		borderRadius: 8,
	},
	changeConnectionType: {
		marginTop: 10,
	},
})
