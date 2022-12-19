import { useState } from "react"
import { Text, StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { useDispatch, useSelector } from "react-redux"

// import * as Google from "expo-auth-session/providers/google"
import { IP_LOCAL } from "@env"
import { sign } from "../reducers/user"

export default function Login({ navigation }) {
	//mettre votre ip dans .env

	const BASE_URL = `http://${IP_LOCAL}:3000`

	const [singnin, setSignin] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [username, setUsername] = useState("")

	const dispatch = useDispatch()

	// connection à google
	// const [request, response, promptAsync] = Google.useAuthRequest({
	// 	expoClientId: GOOGLE_ID,
	// })

	// effet de bord pour google connection
	// useEffect(() => {
	// 	if (response?.type === "success") {
	// 		const { authentication } = response
	// 	}
	// }, [response])
	const handleSubmit = (action) => {
		let user = {
			password: password,
			email: email,
		}
		if (action == "signup") {
			user.username = username
		}
		fetch(`${BASE_URL}/users/${action}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(user),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result) {
					dispatch(sign(data.user))
					navigation.navigate("Liste annonces")
					setEmail("")
					setPassword("")
					setUsername("")
				}
			})
	}

	const handleConnection = () => {
		if (!singnin) {
			return (
				<>
					<View style={styles.email}>
						<Text style={styles.email_title}>Email</Text>
						<TextInput
							style={styles.input}
							value={email}
							onChangeText={(value) => setEmail(value)}
							keyboardType="email-address"
							textContentType="emailAddress"
							autoComplete="email"
						/>
					</View>
					<View style={styles.password}>
						<Text style={styles.password_title}>Password</Text>
						<TextInput
							style={styles.input}
							value={password}
							onChangeText={(value) => setPassword(value)}
							secureTextEntry={true}
							textContentType="password"
							autoComplete="password"
						/>
					</View>
					<TouchableOpacity
						onPress={() => handleSubmit("signin")}
						style={styles.submit}
						activeOpacity={0.8}
					>
						<Text style={styles.textButton}>Sign in</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{ color: "white" }}
						onPress={() => setSignin(!singnin)}
					>
						<Text style={styles.changeConnectionType}>Sign up ?</Text>
					</TouchableOpacity>
				</>
			)
		} else {
			return (
				<>
					<View style={styles.username}>
						<Text style={styles.username}>Username</Text>
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
							keyboardType="email-address"
							textContentType="emailAddress"
							autoComplete="email"
							secureTextEntry={false}
						/>
					</View>
					<View style={styles.password}>
						<Text style={styles.password_title}>Password</Text>
						<TextInput
							style={styles.input}
							value={password}
							onChangeText={(value) => setPassword(value)}
							secureTextEntry={true}
							textContentType="password"
							autoComplete="password"
						/>
					</View>
					<TouchableOpacity
						onPress={() => handleSubmit("signup")}
						style={styles.submit}
						activeOpacity={0.8}
					>
						<Text style={styles.textButton}>Sign Up</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => setSignin(!singnin)}>
						<Text style={styles.changeConnectionType}>Sign in ?</Text>
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
					// disabled={!request}
					style={styles.ssoGoogle}
				>
					<FontAwesomeIcon
						style={styles.icon}
						icon={faGoogle}
					></FontAwesomeIcon>
					<Text style={{ color: "white" }}>Google</Text>
				</TouchableOpacity>
				<TouchableOpacity
					// disabled={!request}
					style={styles.ssoFacebook}
				>
					<FontAwesomeIcon
						style={styles.icon}
						icon={faFacebook}
					></FontAwesomeIcon>
					<Text style={{ color: "white" }}>Facebook</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.login}>{handleConnection()}</View>
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
		flex: 0.5,
		alignItems: "center",
		marginBottom: 40,
	},
	ssoGoogle: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 30,
		padding: 10,
		minWidth: "50%",
		maxWidth: "50%",
		backgroundColor: "#e53935",
		borderRadius: 8,
	},
	ssoFacebook: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 30,
		padding: 10,
		minWidth: "50%",
		backgroundColor: "#039be5",
		borderRadius: 8,
	},
	icon: {
		marginRight: 5,
	},
	login: {
		flex: 2,
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
	textButton: {
		color: "white",
	},
	submit: {
		alignItems: "center",
		marginTop: 30,
		padding: 10,
		width: "100%",
		backgroundColor: "#43a047",
		borderRadius: 8,
	},
	changeConnectionType: {
		marginTop: 10,
	},
})
