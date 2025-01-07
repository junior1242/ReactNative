import { View, Text, ImageBackground, Image, TextInput,StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import MyButton from "@/components/myButton";
import { FontAwesome } from "@expo/vector-icons";
// import Svg, { Path } from "react-native-svg";
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
          marginHorizontal: 20,
          backgroundColor: "white",
        }}
      >
        <TextInput
          placeholder="Enter Your Email"
          style={styles.input}
          onChange={(e) => console.log(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Enter Your Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <MyButton title={"Login"} onPress={onlogin} />
      </View>
      <View style={styles.icons}>
        <Text>
          Don't Have any Account?{" "}
          <Link href={"./signup"} style={{ color: "blue" }}>
            SignUp
          </Link>
        </Text>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity>
          <FontAwesome name="google" size={30} color="#DB4437" />
          </TouchableOpacity> 
       <TouchableOpacity>
          <FontAwesome name="facebook" size={30} color="#316FF6" />
          </TouchableOpacity>
        </View>  
    </View>
  )
}
export default Login;



const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 0.1,
    borderColor: "gray",
  },
  icons:{
    flex: 1,
    alignItems: "center",
  },
  icon:{
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    gap:20
  },
  },
)