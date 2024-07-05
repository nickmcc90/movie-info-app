import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'

import { icons } from '../../extras'


const Individmovies = ({ id }) => {

  const poster = "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/25-best-action-movies-of-all-time-ranked.jpg"
  const title = "The Avengers"
  const year = 2017
  const ageRated = "PG 13"
  const tomatoScore = "94%"

  

  return (
    <View style={{ backgroundColor: "lightblue", height: 270, width: 210 }}>
      <Image 
        source={poster}
        resizeMode="contain"
        style={{ width: "100%", height: "50%"}}
      />
      <View style={{ gap: 10}}>
        <Text>{title}</Text>
        <View style={{ flexDirection: "row", gap: 6, alignContent: "center" }}>
          <Text>{year}</Text>
          <Text style={{ height: 7, width: 7, backgroundColor: "black", borderRadius: 40, marginVertical: "auto"}}></Text>
          <Text>{ageRated}</Text>
        </View>
        <View style={{ height: 30, flexDirection: "row", alignContent: "center", gap: 5 }}>
          <Image 
            source={icons.tomato}
            resizeMode="contain"
            style={{ height: "70%", width: "10%"}}
          />
          <Text style={{ marginTop: 3 }} >{tomatoScore}</Text>
        </View>
      </View>
    </View>
    
  )
}

export default Individmovies