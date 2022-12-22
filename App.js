import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { StyleSheet } from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StripeProvider } from "@stripe/stripe-react-native";
import Accueil from "./screens/Accueil";
import Connexion from "./screens/Connexion";
import AnnonceValidee from "./screens/AnnonceValidee";
import Header from "./components/Header";
import CreationAnnonce from "./screens/CreationAnnonce";
import MonProfil from "./screens/MonProfil";
import Annonce from "./screens/Annonce";
import ListeAnnonce from "./screens/ListeAnnonce";
import Helperz from "./screens/Helperz";
import BoiteReception from "./screens/BoiteReception";
import ListeHelperz from "./screens/ListeHelperz";
import PagePaiement from "./screens/PagePaiement";
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
      <Drawer.Screen name="Accueil" component={Accueil} />
      <Drawer.Screen name="Création annonce" component={CreationAnnonce} />
      <Drawer.Screen name="Mon profil" component={MonProfil} />
      <Drawer.Screen name="Connexion" component={Connexion} />
      <Drawer.Screen name="Annonces validées" component={AnnonceValidee} />
      <Drawer.Screen name="Annonce" component={Annonce} />
      <Drawer.Screen name="Helperz" component={Helperz} />
      <Drawer.Screen name="Boite de réception" component={BoiteReception} />
      <Drawer.Screen name="Liste des annonces" component={ListeAnnonce} />
      <Drawer.Screen name="Liste des Helperz" component={ListeHelperz} />
      <Drawer.Screen name="Page de paiement" component={PagePaiement} />
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
