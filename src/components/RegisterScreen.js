import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { postRegisterUser } from "../api/services/users";

const RegisterScreen = (props) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errortext, setErrortext] = useState("");
  const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const handleSubmitButton = async () => {
    setErrortext("");
    if (!fullName) {
      alert("Please fill your name");
      return;
    }
    if (!userName) {
      alert("Please fill user name");
      return;
    }
    if (!userEmail) {
      alert("Please fill Email");
      return;
    }

    if (!userPassword) {
      alert("Please fill Password");
      return;
    }

    const response = await postRegisterUser({
      name: fullName,
      username: userName,
      email: userEmail,
      password: userPassword,
    });

    console.log("response for register", response.data);
    if (response.status === 201) {
      console.log("success registered");
      setIsRegistraionSuccess(true);
    } else {
      setErrortext(response.data);
    }
  };

  if (isRegistraionSuccess) {
    return (
      <KeyboardAvoidingView>
        <View
          style={{
            backgroundColor: "white",
            justifyContent: "center",
          }}
        >
          <Image
            source={{ uri: "https://i.ibb.co/Gsz2CdY/superm-AAART-1.png" }}
            style={{
              height: 150,
              resizeMode: "contain",
              alignSelf: "center",
            }}
          />
          <Text style={styles.successTextStyle}>Registration Successful</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => props.navigation.navigate("LoginPage")}
          >
            <Text style={styles.buttonTextStyle}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset="130"
      behavior={"padding"}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: "flex-end",
            alignContent: "flex",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={{
                uri: "https://i.ibb.co/K5GRb7d/supermaaart-HIGHRESUPDATED.png",
              }}
              style={{
                width: "50%",
                height: 150,
                resizeMode: "contain",
                margin: 30,
              }}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(fullName) => setFullName(fullName)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Enter User Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder="Enter Email"
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) => setUserPassword(UserPassword)}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              returnKeyType="next"
              secureTextEntry={true}
              blurOnSubmit={false}
            />
          </View>
          {errortext != "" ? (
            <Text style={styles.errorTextStyle}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.2}
            onPress={handleSubmitButton}
          >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: "#3b5998",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#dadae8",
  },
  errorTextStyle: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },
  successTextStyle: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
    padding: 30,
  },
});
