// import { View, Text, ScrollView, FlatList } from 'react-native'
// import React from 'react'

// const index = () => {
//   return (
    // <ScrollView horizontal
    //   showsHorizontalScrollIndicator={false}
    //   contentContainerStyle={{padding:20}}>
    //   {
    //     [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15].map((item) => {
    //       return <View style={{width:100,height:100,backgroundColor:"red",marginTop:20, marginBottom:20,marginRight:10,borderRadius:50,borderColor:"#rgb(100, 54, 73)",borderWidth:1}} />
    //     })
    //   }
    // </ScrollView>
    // <View>
    //   <FlatList
    //     data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
    //     renderItem={( item ) => {
    //       return (
    //         <View
    //           style={{
    //             width: 100,
    //             height: 100,
    //             backgroundColor: "red",
    //             marginBottom: 20,
    //             marginRight: 10,
    //             // borderRadius: 50,
    //             // borderColor: "#rgb(100, 54, 73)",
    //             // borderWidth: 1
    //           }}
    //         ></View>
    //       )
    //     }}
    //   />
    // </View>
//   )
// }


import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

const index = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]}
        renderItem={({ item }) => <View style={styles.box}></View>}
        keyExtractor={(item) => item.toString()} // Ensure each item has a unique key
        
        
        numColumns={3} // Display items in a grid format (optional)
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        // horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  list: {
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    margin: 5,
  },
});



export default index