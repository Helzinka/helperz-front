import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, Text, Button, StyleSheet } from "react-native";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ChatScreen = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		setMessages([
			{
				_id: 1,
				text: "Bonjour pouvez-vous me donner quelques détails concernant le produit que vous souhaiteriez acheter",
				createdAt: new Date(),
				user: {
					_id: 2,
					name: "React Native",
					avatar: "https://placeimg.com/140/140/any",
				},
			},
			{
				_id: 2,
				text: "Bonjour j'ai trouvé votre profil sur l'application et j'aimerai échanger avec vous en vue d'une expertise",
				createdAt: new Date(),
				user: {
					_id: 1,
					name: "React Native",
					// avatar: "https://placeimg.com/140/140/any",
				},
			},
		]);
	}, []);

	const onSend = useCallback((messages = []) => {
		setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
	}, []);

	const renderSend = (props) => {
		return (
			<Send {...props}>
				<View>
					<MaterialCommunityIcons
						name="send-circle"
						style={{ marginBottom: 5, marginRight: 5 }}
						size={32}
						color="#00C6A0"
					/>
				</View>
			</Send>
		);
	};

	const renderBubble = (props) => {
		return (
			<Bubble
				{...props}
				wrapperStyle={{
					right: {
						backgroundColor: "#00C6A0",
					},
					left: {
						backgroundColor: "#006EFF",
					},
				}}
				textStyle={{
					left: {
						color: "#fff",
					},
					right: {
						color: "#fff",
					},
				}}
			/>
		);
	};

	const scrollToBottomComponent = () => {
		return <FontAwesome name="angle-double-down" size={22} color="#333" />;
	};

	return (
		<GiftedChat
			messages={messages}
			onSend={(messages) => onSend(messages)}
			user={{
				_id: 1,
			}}
			renderBubble={renderBubble}
			alwaysShowSend
			renderSend={renderSend}
			scrollToBottom
			scrollToBottomComponent={scrollToBottomComponent}
		/>
	);
};

export default ChatScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
