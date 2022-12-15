import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import Slider from "@react-native-community/slider";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Filter({ isVisible, onClose }) {
	const [checkbox, setCheckbox] = useState();
	const [slider, setSlider] = useState();

	return (
		<Modal animationType="slide" visible={isVisible}>
			<View style={styles.modal}>
				<View>
					<Text>Filtre </Text>
					<Pressable onPress={onClose}>
						<FontAwesome name="close" size={20} style={styles.plus}></FontAwesome>
					</Pressable>
				</View>
				<View style={styles.checkbox}>
					<Checkbox
						value={checkbox}
						onValueChange={setCheckbox}
						style={styles.checkbox}
					/>
					<Text>{checkbox}</Text>
				</View>
				<View style={styles.slider}>
					<Slider
						style={{ width: 200, height: 40 }}
						minimumValue={0}
						maximumValue={1}
						value={slider}
						onValueChange={setSlider}
					/>
					<Text style={styles.sliderText}>{slider}</Text>
				</View>
			</View>
		</Modal>
	);
}
const styles = StyleSheet.create({
	modal: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	slider: {
		alignItems: "center",
	},
	checkbox: {
		display: "flex",
		flexDirection: "row",
	},
	sliderText: {
		marginRight: 10,
	},
});
