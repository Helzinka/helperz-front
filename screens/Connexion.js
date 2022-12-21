import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";

// import * as Google from "expo-auth-session/providers/google"
import { IP_LOCAL } from "@env";
import { sign, addAllAnnounces } from "../reducers/user";

export default function Login({ navigation }) {
  //mettre votre ip dans .env

  const BASE_URL = `http://${IP_LOCAL}:3000`;

  const [singnin, setSignin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.value)

  const handleSubmit = (action) => {
    let user = {
      password: password,
      email: email,
    };
    if (action == "signup") {
      user.username = username;
    }
    fetch(`${BASE_URL}/users/${action}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(sign(data.user));
          setEmail("");
          setPassword("");
          setUsername("");
          const userToken = data.user.token;
          return fetch(`${BASE_URL}/users/announces/${userToken}`)
            .then((response) => response.json())
            .then((data) => {
              if (data.result) {
                dispatch(addAllAnnounces(data.announces));
                navigation.navigate("Création annonce");
              }
            });
        }
      });
  };

  const handleConnection = () => {
    if (!singnin) {
      return (
        <>
          <View style={styles.email}>
            <Text style={styles.email_title}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail(value)}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
            />
          </View>
          <View style={styles.password}>
            <Text style={styles.password_title}>Mot de passe</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
              textContentType="password"
              autoComplete="password"
            />
          </View>
          <TouchableOpacity
            onPress={() => handleSubmit("signin")}
            style={styles.submit}
            activeOpacity={0.8}
          >
            <Text style={styles.textButton}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ color: "white" }}
            onPress={() => setSignin(!singnin)}
          >
            <Text style={styles.changeConnectionType}>S'inscrire ?</Text>
          </TouchableOpacity>
        </>
      );
    } else {
      return (
        <>
          <View style={styles.username}>
            <Text style={styles.username}>Pseudo</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={(value) => setUsername(value)}
            />
          </View>
          <View style={styles.email}>
            <Text style={styles.email_title}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail(value)}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
              secureTextEntry={false}
            />
          </View>
          <View style={styles.password}>
            <Text style={styles.password_title}>Mot de passe</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
              textContentType="password"
              autoComplete="password"
            />
          </View>
          <TouchableOpacity
            onPress={() => handleSubmit("signup")}
            style={styles.submit}
            activeOpacity={0.8}
          >
            <Text style={styles.textButton}>S'inscrire</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSignin(!singnin)}>
            <Text style={styles.changeConnectionType}>J'ai déjà un compte</Text>
          </TouchableOpacity>
        </>
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.sso}>
        <TouchableOpacity
          // disabled={!request}
          style={styles.ssoGoogle}
        >
          <FontAwesomeIcon
            style={styles.icon}
            icon={faGoogle}
          ></FontAwesomeIcon>
          <Text style={{ color: "white" }}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // disabled={!request}
          style={styles.ssoFacebook}
        >
          <FontAwesomeIcon
            style={styles.icon}
            icon={faFacebook}
          ></FontAwesomeIcon>
          <Text style={{ color: "white" }}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.login}>{handleConnection()}</View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  sso: {
    flex: 0.8,
    // alignItems: "center",
    // marginBottom: 40,
  },
  ssoGoogle: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 60,
    padding: 10,
    minWidth: "80%",
    maxWidth: "80%",
    backgroundColor: "#EA4335",
    borderRadius: 8,
  },
  ssoFacebook: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "space-evenly",
    fontWeight: "bold",
    marginTop: 30,
    padding: 10,
    minWidth: "80%",
    maxWidth: "80%",
    backgroundColor: "#1877F2",
    borderRadius: 8,
  },
  icon: {
    marginRight: 5,
    color: "white",
  },
  login: {
    flex: 2,
    width: "80%",
  },
  input: {
    borderBottomColor: "#00C6A0",
    borderBottomWidth: 1,
    height: 30,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 20,
    width: "100%",
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
  },
  submit: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 10,
    width: "100%",
    backgroundColor: "#00C6A0",
    borderRadius: 8,
  },
  changeConnectionType: {
    marginTop: 15,
  },
});
