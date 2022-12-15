import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function () {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.messageContainer}>
        <View style={styles.profilHelper}>
          <View style={styles.photoContainer}>
            <TouchableOpacity style={styles.avatar} activeOpacity={0.8}>
              <FontAwesome name="user" size={30} color={"black"} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>Helper</Text>
            <Text>Titre de l'annonce</Text>
          </View>
        </View>

        <View style={styles.previewContainer}>
          <Text>Preview du message de l'Helper</Text>
        </View>

        <View style={styles.dateReceptionMessage}>
          <Text style={styles.styleDate}>Date de réception du message</Text>
        </View>

        <TouchableOpacity style={styles.trashButton}>
          <FontAwesome style={styles.styleButton} name="trash"></FontAwesome>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  messageContainer: {
    flex: 1,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "#00C6A0",
    justifyContent: "center",
  },
  profilHelper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  photoContainer: {
    margin: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: "#00C6A0",
    // backgroundColor: "#006EFF",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  previewContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: "25%",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#DAD7D6",
  },
  dateReceptionMessage: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  styleDate: {
    fontSize: 10,
  },
  trashButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 3,
  },
  styleButton: {
    fontSize: 20,
    color: "#F94A56",
  },
});
