import React from "react";
import { ScrollView, Text, View, Button } from "react-native";
import * as SecureStore from "expo-secure-store";

const todoList = ({navigation}) => {
    const {navigate}=navigation;
  const getToken = async (key) => {
    return await SecureStore.getItemAsync(key);
  };
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 27 }}>Welcome</Text>
      <View style={{ margin: 20 }} />
      <Button
        onPress={() => {
          const token = getToken('userToken');
        //   console.log(token);
         navigate("Login")
        
        }}
        title="Logout"
      />
    </ScrollView>
  );
};

export default todoList;
