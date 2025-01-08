import { View, Text, ImageBackground, Image, TextInput,StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import MyButton from "@/components/myButton";
import { FontAwesome } from "@expo/vector-icons";
const Signup = () => {
  const router = useRouter();
  const onRegister = () => {
    router.navigate("/login");
  };
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Image
        source={require("@/assets/images/signup.jpg")}
        style={{
          width: "100%",
          height: 300,
        }}
        resizeMode="cover"
      />

      <View
        style={{
          padding: 20,
          marginHorizontal: 20,
          backgroundColor: "white",
        }}
      >
        <TextInput
          placeholder="First Name"
          style={styles.input}
        />
        <TextInput
          placeholder="Second Name"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Your Email"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Your Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          placeholder="Re-Type Your Password"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View style={styles.icon}>
        <MyButton title={"SignUp"} onPress={onRegister} />
      </View>
    </View>
  );
};

export default Signup;


const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 10,
    marginBottom: 5,
    padding: 20,
    borderWidth: 0.1,
    borderColor: "gray",
  },
  icons: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
});