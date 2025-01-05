import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MyButton = () => {
  return (
    <View>
          <TouchableOpacity
              style={{
                  backgroundColor: 'orange',
                  paddingHorizontal: 40,
                  paddingVertical: 20,
                  margin: 10,
                  borderRadius: 5,
        }} 
        onPress={() => alert('Hello, shahid!')}
          > 
              <Text>Click me!</Text>
        </TouchableOpacity>
    </View>
  )
}

export default MyButton