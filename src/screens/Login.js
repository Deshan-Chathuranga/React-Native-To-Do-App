import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Alert,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

const Login = ({ navigation }) => {
  const { navigate } = navigation;
  const [email,setEmail]=useState('');

  const handleLogin=()=>{
      if(email !== ''){
        Alert.alert('Login Alert','Login Successfuled')
        setEmail('')
      }else{
        Alert.alert('Login Alert','Login Failed') 
      }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ backgroundColor: "#FFF", height: "100%" }}>
        <Image
          source={require("../images/image3.jpg")}
          style={{ width: "100%", height: "43%" }}
        />
        <Text
          style={{
            fontSize: 30,
            fontFamily: "SemiBold",
            alignSelf: "center",
          }}
        >
          Desh ToDo
        </Text>

        <Text
          style={{
            fontFamily: "SemiBold",
            marginHorizontal: 55,
            textAlign: "center",
            marginTop: 5,
            opacity: 0.4,
          }}
        >
          This is a TODo App with basic crud operations!
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 50,
            paddingHorizontal: 10,
            borderColor: "#00716F",
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <Icon name="mail" color="#00716F" size={24} />
          <TextInput 
          style={{ paddingHorizontal: 10 }} 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 55,
            borderWidth: 2,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: "#00716F",
            borderRadius: 23,
            paddingVertical: 2,
          }}
        >
          <Icon name="key" color="#00716F" size={24} />
          <TextInput
            style={{ paddingHorizontal: 10 }}
            secureTextEntry={true}
            autoCorrect={false}
            placeholder="Password"
          />
        </View>

        <View
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            backgroundColor: "#00716F",
            paddingVertical: 10,
            borderRadius: 23,
          }}
        >
          {/* <Button title="Login"/> */}
            <Text
              style={{
                color: "white",
                fontFamily: "SemiBold",
              }}
              onPress={handleLogin}
            >
              Already a member
            </Text>
          {/* </Button> */}
        </View>
        <Text
          onPress={() => navigate("Register")}
          style={{
            alignSelf: "center",
            color: "#00716F",
            fontFamily: "SemiBold",
            paddingVertical: 30,
          }}
        >
          Don't you have an account?Sign Up
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
