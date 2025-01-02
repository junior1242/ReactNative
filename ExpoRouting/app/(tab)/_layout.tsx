import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
      <Tabs screenOptions={{headerShown:false}}>
          <Tabs.Screen name='index' options={{title:"Home"}} />
          <Tabs.Screen name='about' options={{title:"About"}} />
    </Tabs>
  )
}

export default _layout