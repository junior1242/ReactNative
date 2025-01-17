import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useFonts,Poppins_700Bold_Italic as Bold,Poppins_300Light as Light} from '@expo-google-fonts/poppins'
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const index = () => {
  const [loaded,error] = useFonts({
    Bold, Light
  })
  console.log(loaded);
  
 useEffect(() => {
   if (loaded || error) {
     SplashScreen.hideAsync();
   }
 }, [loaded, error]);

 if (!loaded && !error) {
   return null;
 }
  console.log(loaded);
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: "orange",
          fontFamily: "Bold",
        }}
      >
        Hello world
      </Text>
    </View>
  );
}

export default index
