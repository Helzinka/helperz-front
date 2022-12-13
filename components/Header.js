import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Header({ navigation }) {
  const { top } = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-online.png")}
        />
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <FontAwesome
            name="bars"
            size={28}
            color="black"
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 8,
    // paddingLeft: 10,
  },
  logo: {
    width: 140,
    height: 60,
    // backgroundColor: "red",
    resizeMode: "cover",
  },
  menuIcon: {
    // backgroundColor: "blue",
  },
});
