import React from "react";
import { ScrollView, Text, View, Button,StyleSheet } from "react-native";
import * as SecureStore from "expo-secure-store";
import {Appbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const todoList = ({navigation}) => {
    const {navigate}=navigation;
  const getToken = async (key) => {
    return await SecureStore.getItemAsync(key);
  };
  return (
    <ScrollView >
      <Appbar.Header style = {styles.item}>
     <Appbar.Content title="Home" />
      {/* <Appbar.Action icon="user" onPress={() => {navigate("Login")}} /> */}
      <Icon name="user" size={30} color="white" onPress={() => {navigate("Login")}}/>
  </Appbar.Header>
      {/* <Text style={{ fontSize: 27 }}>Welcome</Text>
      <View style={{ margin: 20 }} />
      <Button
        onPress={() => {
          const token = getToken('userToken');
        //   console.log(token);
         navigate("Login")
        
        }}
        title="Logout"
      /> */}
    </ScrollView>
  );
};

export default todoList;
const styles = StyleSheet.create ({
  item: {
     backgroundColor : "#00716F",
     width:"auto"
  }
})