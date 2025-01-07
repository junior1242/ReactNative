import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const MyButton = ({ title, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",

  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: 700,
  },
});

export default MyButton;
