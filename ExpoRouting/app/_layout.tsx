import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='(drawer)'/>
       {/* <Stack.Screen name="home" />    */}
       {/* <Stack.Screen name="(tab)" />    */}
       {/* <Stack.Screen name="about" />    */}
    </Stack>
  );
}

export default _layout