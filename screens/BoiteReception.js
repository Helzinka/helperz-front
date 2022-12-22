import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Messages from "../components/Messages";

export default function MesMessages() {
  return (
    <ScrollView>
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
