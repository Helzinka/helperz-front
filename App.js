import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StyleSheet } from "react-native"
import HomeScreen from "./screens/Home"
import LoginScreen from "./screens/Login"

import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import user from "./reducers/user"

const store = configureStore({
	reducer: { user },
})

export default function App() {
	const Stack = createNativeStackNavigator()

	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen
						name="Home"
						component={LoginScreen}
					/>
					{/* <Stack.Screen name="Login" component={LoginScreen} /> */}
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
