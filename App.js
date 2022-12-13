import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"

import FontAwesome from "react-native-vector-icons/FontAwesome"

import Home from "./screens/Home"
import Login from "./screens/Login"
import { StyleSheet } from "react-native"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

import user from "./reducers/user"

const store = configureStore({
	reducer: { user },
})

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			screenOptions={{
				header: (props) => <Header {...props} />,
				drawerActiveTintColor: "#655074",
				drawerType: "back",
			}}
		>
			<Drawer.Screen
				name="Login"
				component={Test}
			/>
		</Drawer.Navigator>
	)
}

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen
						name="Home"
						component={Login}
					/>
					<Stack.Screen
						name="Login"
						component={Login}
					/>
					<Stack.Screen
						name="drawer"
						component={DrawerNavigator}
					/>
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
