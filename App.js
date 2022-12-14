import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer"

import Home from "./screens/Home"
import Login from "./screens/Login"
import AnnonceRecap from "./screens/AnnonceRecap"
import Header from "./components/Header"
import CreateAnnounce from "./screens/CreateAnnounce"
import Profil from "./screens/Profil"
import PageAnnonce from "./screens/PageAnnonce"
import ListAnnounce from "./screens/ListAnnounce"

import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

import user from "./reducers/user"

const store = configureStore({
	reducer: { user },
})
;("trou de balle")

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator // Fonction pour le menu
			initialRouteName="Accueil"
			screenOptions={{
				header: (props) => <Header {...props} />,
				drawerActiveTintColor: "#00C6A0",
				drawerType: "back",
				drawerPosition: "right", // Positionne le menu à droite
			}}
		>
			<Drawer.Screen
				name="Accueil"
				component={Home}
			/>
			<Drawer.Screen
				name="Créer une annonce"
				component={CreateAnnounce}
			/>
			<Drawer.Screen
				name="Profile"
				component={Profil}
			/>
			<Drawer.Screen
				name="Se connecter"
				component={Login}
			/>
			<Drawer.Screen
				name="Annnonces validées"
				component={AnnonceRecap}
			/>
			<Drawer.Screen
				name="Mes annonces"
				component={PageAnnonce}
			/>
			<Drawer.Screen
				name="Liste annonces"
				component={ListAnnounce}
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
						name="DrawerNavigator"
						component={DrawerNavigator}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	)
}
