import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.view}>
      <Text style={ styles.text }>Home</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize:34
  }
})
