import { View, Text, ImageBackground, Image, TextInput } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import MyButton from "@/components/myButton";
const Login = () => {
  
  const router = useRouter();
  const onlogin = () => {
    router.navigate("/signup");
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        source={require("@/assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 300,
        }}
        resizeMode="contain"
      />

      <View
        style={{
          padding: 20,
          marginHorizontal:20,
          backgroundColor: "white",
        }}
      >
        <TextInput placeholder="Enter Your Email"
          style={{
            height:50,
            borderRadius: 10,
            marginBottom: 10,
            padding: 10,
          }}
        onChange={(e) => console.log(e.nativeEvent.text)}
        />
        <TextInput placeholder="Enter Your Password"
          secureTextEntry={true}
          style={{
            height:50,
            borderRadius: 10,
            marginBottom: 10,
            padding:10
          }}
        />
      <MyButton title={"Login"} onPress={onlogin} />
      </View>
    </View>
  );
};
export default Login;
