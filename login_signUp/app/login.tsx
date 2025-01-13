import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,

} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useRouter } from "expo-router";
import MyButton from "@/components/myButton";
import { FontAwesome } from "@expo/vector-icons";

const Login = () => {
  const [value, setValue] = useState({
    value1:"",
    value2:"",
  });
  // const [Password, setPassword] = useState("");
  
  const router = useRouter();
  // const onlogin = () => {
    // console.log((Number(value) + Number(Password)).toFixed(2));
    // console.log("Password is : ", Password);
    // };
    
    const Sum = () => {
      console.log(Number(value.value1) + Number(value.value2));
  }
    useEffect(() => {
      console.log("useEffect is called");
    },[value?.value1]);
  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          marginRight: 8,
        }}
      >
        <Text>Need Help?</Text>
      </View>
      <Image
        source={require("@/assets/images/login.jpg")}
        style={{
          width: "100%",
          height: 300,
        }}
        resizeMode="cover"
      />

      <View
        style={{
          padding: 20,
          // marginHorizontal: 20,
          backgroundColor: "white",
        }}
      >
        <TextInput
          placeholder="Enter Your Gmail"
          style={styles.input}
          onChangeText={(e) => setValue((prev) => ({ ...prev, value1: e }))}
        />
        <TextInput
          placeholder="Enter Your Password"
          style={styles.input}
          onChangeText={(e) => setValue((prev) => ({ ...prev, value2: e }))}
          // secureTextEntry={true}
          // onChangeText={(e) => setPassword(e)}
        />
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <MyButton title={"Login"} onPress={Sum} />
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
  );
};
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
