import { View, Text, Button,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ReactNativeModal from 'react-native-modal'

const index = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Button title="click me" onPress={() => setVisible(true)}/>
      <ReactNativeModal
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}
        onBackButtonPress={() => setVisible(false)}
        animationIn={"zoomIn"}
        animationOut={"jello"}
        style={{
          justifyContent: "flex-end",
          margin: 0,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            height: 200,
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Hello! This is React Native Series and today we are learning realted
            to Modal
          </Text>
        </View>
      </ReactNativeModal>
    </View>
  );
}

export default index

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})