import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { StyleSheet } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StripeProvider } from "@stripe/stripe-react-native";
import Home from "./screens/Home";
import Login from "./screens/Login";
import AnnonceRecap from "./screens/AnnonceRecap";
import Header from "./components/Header";
import CreateAnnounce from "./screens/CreateAnnounce";
import Profil from "./screens/Profil";
import PageAnnonce from "./screens/PageAnnonce";
import ListAnnounce from "./screens/ListAnnounce";
import AnnonceFromHelperz from "./screens/AnnonceFromHelperz";
import MesMessages from "./screens/listMessages";
import ListHelperz from "./screens/ListHelperz";
import Payment from "./screens/Payment";
import Messagerie from "./screens/Messagerie";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import user from "./reducers/user";

const store = configureStore({
  reducer: { user },
});

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
      <Drawer.Screen name="Accueil" component={Home} />
      <Drawer.Screen name="Créer une annonce" component={CreateAnnounce} />
      <Drawer.Screen name="Profile" component={Profil} />
      <Drawer.Screen name="Se connecter" component={Login} />
      <Drawer.Screen name="Annnonces validées" component={AnnonceRecap} />
      <Drawer.Screen name="Mes annonces" component={PageAnnonce} />
      <Drawer.Screen name="Liste annonces" component={ListAnnounce} />
      <Drawer.Screen name="Profil Helperz" component={AnnonceFromHelperz} />
      <Drawer.Screen name="Mes Messages" component={MesMessages} />
      <Drawer.Screen name="Liste helperz" component={ListHelperz} />
      <Drawer.Screen name="Paiement" component={Payment} />
      <Drawer.Screen name="Messagerie" component={Messagerie} />
    </Drawer.Navigator>
  );
};

export default function App() {
  const publishableKey =
    "pk_test_51MFIEAJUu2vuwfEB1s5m4rSFn3LChMT7hnO41BWuXCmOfrsIpuPAdbDYuiTl3tJ9yOvj20HYskmYXfUNkjjUphWi00LVe8boQy";
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={publishableKey}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </StripeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});
