import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Header from "./components/Header";
import CreateAnnounce from "./screens/CreateAnnounce";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import user from "./reducers/user";

const store = configureStore({
	reducer: { user },
});
console.log("salut");

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator // Fonction pour le menu
			initialRouteName="Home"
			screenOptions={{
				header: (props) => <Header {...props} />,
				drawerActiveTintColor: "#655074",
				drawerType: "back",
				drawerPosition: "right", // Positionne le menu à droite
			}}
		>
			<Drawer.Screen name="Home" component={Home} />
			<Drawer.Screen name="Create Announce" component={CreateAnnounce} />
			<Drawer.Screen name="Login" component={Login} />
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
