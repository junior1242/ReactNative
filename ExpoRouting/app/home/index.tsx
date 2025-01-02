import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#323245",
          backgroundColor:"#daaddd"
        }}
      >Hello world! this is shahid ali</Text>

      <Link href="/about"
        style={{
          color: "blue",
          fontSize: 20,
          fontStyle: "italic",
          fontFamily: "calibri",
          textDecorationLine:"underline"
        }}
      >go to the link</Link>
    </View>
  );
}
