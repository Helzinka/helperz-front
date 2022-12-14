import React from "react";
import { useState } from "react";
import {
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
} from "react-native";
import Checkbox from "expo-checkbox";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";

export default function Profil() {
	const userData = {
		username: "Pedro",
		idUser: "@PedroLopez",
		// profilPic: "logo.jpg",
		description: "regard comme il fait beau",
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.imageContainer}>
				<View style={styles.imageUser}>
					<Image
						style={styles.imageUser}
						// source={require("../assets/Carrousel.jpg")}
					></Image>
				</View>
			</View>

			<View style={styles.profil}>
				<Text style={styles.username}>{userData.username}</Text>
				<Text style={styles.idUser}>{userData.idUser}</Text>
				<View style={styles.description}>
					<Text style={styles.description}>{userData.description}</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		flexDirection: "column",
		// justifyContent: "space-between",

		// height: "60%",
		// border: "solid",
		// transform: "matrix3d()",
		// boxShadow: "5px 5px rgb(63, 63, 63)",
		// borderWidth: "1px",
		// borderColor: "black",
		// borderRadius: "20px",
	},
	imageContainer: {
		flex: 0.5,
		backgroundColor: "pink",
		// 	height: "25%",
		// 	position: "relative",
		// },
		// imageback: {
		// 	flex: 0.2,
		// 	// height: "100%",
		// 	// width: "100%",

		// 	borderTopLeftRadius: "20px",
		// 	borderTopRightRadius: "20px",
	},

	imageUser: {
		flex: 0.4,
		backgroundColor: "red",
		width: "50%",
		alignSelf: "center",
	},
	image: {
		backgroundColor: "yellow",
		// 	borderRadius: "50%",
		// 	height: 6,
		// 	width: 6,
	},
	profil: {
		backgroundColor: "green",
		//     flexDirection: "column",
		//     alignItems: "center",
		//     justifyContent: "space-around",

		//     gap: 10px;
		//     color: white;
		//     font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
		//         sans-serif;
	},
	// username: {
	//     color: white;
	//     font-weight: bold;
	//     font-style: normal;
	//     font-size: 25px;
	// },
	// idUser:{
	//     color: grey;
	// },

	// description: {
	//     display: flex;
	//     align-items: center;
	// },

	// .profil {
	//     display: flex;
	//     align-items: center;
	//     height: 60px;
	// },
});
