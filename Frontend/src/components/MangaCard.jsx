import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const MangaCard = (props) => {
  return (
    <View style={styles.container}>
        <Image 
        style={styles.cardImage}
        source={require('../../assets/139d4560d1144c90a9d001c24c56f792.jpg')}
        />
      <View style={styles.info}>
        <Text style={styles.cardName}>{props.name}</Text>
        <Text style={styles.cardInfo}>Episodes: {props.episodes}</Text>
        <Text style={styles.cardInfo}>Chapters: {props.chapters}</Text>
        <Text style={styles.cardInfo}>Commets: {props.comments}</Text>
      </View>
    </View>
  )
}

export default MangaCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8779FF",
        width: 363,
        height: 254,
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10

    },
    cardImage: {
        width: 144,
        height: 228
    },
    cardName: {
        fontSize: 20,
        marginBottom: 30,
        color: "#fff",
        fontWeight: "bold",
    },
    cardInfo:{
        color: "#fff",
        paddingVertical: 10,
        fontSize:15
    },
    info:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})