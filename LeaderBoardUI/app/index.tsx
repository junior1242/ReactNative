import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leaderboard</Text>
        <View style={styles.mainCardContainer}>
          {[3, 1, 2].map((item, index) => {
            return <View key={index} style={[styles.mainCard,item !== 1 && {marginTop:20,}]}>
              <Image source={{ uri: "https://picsum.photos/200/300" }} style={styles.mainCardImage}
                resizeMode='cover' />
              <Text style={styles.mainCardTitle}>Shahid</Text>
              <View style={styles.mainCardRankContainer}>
                <Text style={styles.mainCardRankContainerText}>{item}</Text>
              </View>
            </View>;
          })}
        </View>
      </View>


      <FlatList
        data={[1, 2, 3,4,5,6,7,7,8,9,9,7,6,4,3,22,4,5,67,5]}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardDataContainer}>
                <Text style={styles.cardIndex}>{index + 1}</Text>
                <Image
                  source={{
                    uri: "https://images.pexels.com/photos/8159657/pexels-photo-8159657.jpeg?auto=compress&cs=tinysrgb&w=600",
                  }}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <Text style={styles.cardTitle}>walid</Text>
              </View>

              <View style={styles.cardRankContainer}>
                <Text style={styles.cardRankTitle}>321,234</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272C35",
  },
  topContainer: {
    backgroundColor: "#1A1F25",
    paddingTop: 30,
    padding: 20,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    gap: 20,
    paddingBottom: 50,
  },
  headerTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 21,
    fontWeight:"bold"
  },
  mainCardContainer: {
    flexDirection: "row",
    gap: 5,
    justifyContent:"center",
  },
  mainCard: {
    backgroundColor: "#272C35",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    gap: 15,
  },
  mainCardImage: {
    width: 70,
    height: 90,
    borderRadius: 20,
  },
  mainCardTitle: {
    color: "white",
    fontSize: 17,
    fontWeight:600,
  },
  mainCardRankContainer: {
    backgroundColor: "orange",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    position: "absolute",
    bottom:-15
  },
  mainCardRankContainerText: {
    color:"white"
  },
  card: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin:10
  },
  cardDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    
  },
  cardIndex: {
    color: "white",
    marginLeft:15
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft:10,
  },
  cardTitle: {
    color: "white",
    fontSize:20,
  },
  cardRankContainer:{},
  cardRankTitle: {
    color: "orange",
    fontSize:20
  },
})

export default Index
