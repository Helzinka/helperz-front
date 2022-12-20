import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Card from "../components/Card";
import FilterModal from "../modals/Filter";
import mongodb from "../data.json";
// fake data mongodb
import { IP_LOCAL } from "@env";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";

export default function Annonce({ navigation }) {
  const BASE_URL = `http://${IP_LOCAL}:3000`;
  const [data, setData] = useState();
  const [initLocation, setInitLocation] = useState({});
  const [search, setSearch] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const UserReducer = useSelector((state) => state.user.value);

  // affiche la modal au click de l'icon "+"
  const isVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  // ferme la modal au click dans la modal "quitter"
  const onClose = () => {
    setIsModalVisible(!isModalVisible);
  };
  useEffect(() => {
    if (UserReducer.user.token) {
      // on récupère la dernière annnonce depuis le reducer user
      let last = UserReducer.announces.length - 1;
      setInitLocation({
        lat: UserReducer.announces[last].location.lat,
        long: UserReducer.announces[last].location.long,
      });
      const announceLocation = UserReducer.announces[last].location.name;
      // on précise le lieu de l'annonce et on fetch tout les helperz sur la meme ville
      fetch(`${BASE_URL}/users/helperz/${announceLocation}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
  }, []);

  // fonction pour retourner toutes les helperz via le composant "Card"
  // check si les données sont présente via if(data) !important
  const showAnnounce = () => {
    if (data) {
      return data.user.map((value, index) => (
        <Card key={index} data={value} type="helperz" />
      ));
    }
  };
  const showFitlerAnnonce = () => {
    if (data) {
      let last = UserReducer.announces.length - 1;
      const announceLocation = UserReducer.announces[last].location.name;
      return UserReducer.announces[last].tag.map((e, i) => {
        return (
          <View style={styles.filter}>
            <Text key={i}>{e}</Text>
          </View>
        );
      });
    }
  };
  const showmarker = () => {
    if (data) {
      return data.user.map((value, index) => {
        const [lat, long] = [
          value.helperz.location.lat,
          value.helperz.location.long,
        ];
        return (
          <Marker
            key={index}
            pinColor="red"
            coordinate={{ latitude: lat, longitude: long }}
            title={value.username}
          ></Marker>
        );
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.search}
          onChangeText={setSearch}
          value={search}
          placeholder="Location"
        ></TextInput>
        <View style={styles.filters}>
          <TouchableOpacity onPress={() => isVisible()}>
            <FontAwesome
              name="plus"
              size={20}
              style={styles.plus}
            ></FontAwesome>
          </TouchableOpacity>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {showFitlerAnnonce()}
          </ScrollView>
        </View>
      </View>
      {initLocation && (
        <MapView
          region={{
            latitude: initLocation.lat,
            longitude: initLocation.long,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.mapView}
        >
          {showmarker()}
        </MapView>
      )}

      <ScrollView style={styles.ScrollView}>
        <View style={styles.announces}>{showAnnounce()}</View>
        <FilterModal
          isVisible={isModalVisible}
          onClose={() => onClose()}
        ></FilterModal>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  search: {
    alignSelf: "center",
    width: "85%",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "#00C6A0",
    borderWidth: 3,
  },
  filters: {
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  filter: {
    backgroundColor: "#00C6A0",
    borderRadius: 8,
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 4,
    marginRight: 8,
  },
  plus: {
    marginLeft: 10,
    marginRight: 20,
  },
  ScrollView: {
    flex: 1.5,
    backgroundColor: "white",
    flexDirection: "column",
  },
  announces: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
  },
  mapView: {
    flex: 1,
    height: "100%",
  },
});
