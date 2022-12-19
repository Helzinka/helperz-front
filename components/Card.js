import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

// accès à props "data" directement grace à la destructuration
// si type == "helperz" affiche la card helperz, sinon annonces
export default function Card({ data, type }) {
  if (type === "helperz") {
    return (
      <TouchableOpacity style={styles.card}>
        <Image
          source={require("../assets/Logo-Full-Black.png")}
          style={styles.imageCard}
        />
        <View style={styles.content}>
          <Text style={styles.username}>{data.username}</Text>
          <Text style={styles.lastname}>{data.lastname}</Text>
          <Text style={styles.location}>
            {" "}
            lieu : {data.helperz.location.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={styles.card}>
        <Image
          source={require("../assets/Logo-Full-Black.png")}
          style={styles.imageCard}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.descritption}>{data.descritption}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    marginBottom: 10,
    backgroundColor: "white",
  },
  imageCard: {
    height: 50,
    width: 50,
    backgroundColor: "white",
  },
  content: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  title: {
    fontSize: 26,
    color: "#616161",
    backgroundColor: "white",
  },
  descritption: {
    fontSize: 12,
    color: "#8e8e8e",
    backgroundColor: "white",
  },
});
