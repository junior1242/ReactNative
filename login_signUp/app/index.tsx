import { Text, View } from "react-native";
import MyButton from "../components/myButton";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyButton />
    </View>
  );
}
