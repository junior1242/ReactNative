import MyButton from "@/app-example/components/myButton";
import { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput } from "react-native";

export default function Index() {
  const [Value, setValue] = useState({
    value1: "",
    value2: "",
  });
  const Addition = () => {
    console.log("the sum of these number is  : ", Number(Value.value1) + Number(Value.value2));
  }
  const Multiply = () => {
    console.log("the Multiply of these number is  : ", Number(Value.value1) * Number(Value.value2));
  }
  const Subtraction = () => {
    console.log("the Subraction of these number is  : ", Number(Value.value1) - Number(Value.value2));
  }
  const Division = () => {
     console.log("the Division of these number is  : ", Number(Value.value1) / Number(Value.value2));
  }
  return (
    <View style={styles.view}>
      <Image
        source={require("../assets/images/calculator.jpeg")}
        style={styles.image}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="First Number"
        onChangeText={(e) => setValue({ ...Value, value1: e })}
      />
      <TextInput
        style={styles.input}
        placeholder="Second Number"
        onChangeText={(e) => setValue({ ...Value, value2: e })}
      />
      <View style={styles.button}>
      <MyButton title={"Addition"} onPress={Addition} />
      <MyButton title={"Multiply"} onPress={Multiply} />
      <MyButton title={"Subtraction"} onPress={Subtraction} />
      <MyButton title={"Division"} onPress={Division} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    marginTop:10
  },
  image: {
    // width: "100%",
    // height: 300,
    marginBottom: 20,
  }
  ,
  input:{
    height: 50,
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    borderWidth: 0.1,
    borderColor: "gray",
  },
  button:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20
  }
 
});
