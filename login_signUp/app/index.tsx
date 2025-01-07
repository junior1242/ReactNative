import { Text, View } from "react-native";
import MyButton from "../components/myButton";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  const OnContinue = () => {
    router.navigate("/login")
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyButton title={"Continue"} onPress={OnContinue} />
    </View>
  );
}
