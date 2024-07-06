import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'

import { icons } from '../../extras'

import useFetch from '../../hook/useFetch'

import CheckRating from '../../utils/checkRating'


const Individmovies = ({ id }) => {

  const router = useRouter();

  // const poster = "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/04/25-best-action-movies-of-all-time-ranked.jpg"
  // const title = "The Avengers"
  // const year = 2017
  // const ageRated = "PG 13"
  // const tomatoScore = "94%"

  const { data, isLoading, error } = useFetch(id)

  const ratingResult = CheckRating(data.Ratings)

  return (
    <>
      { isLoading ? 
        (<ActivityIndicator size="large" color="lightgray" />) : 
      error ? 
        (<Text>Something went wrong...</Text>) : 
        (
          <TouchableOpacity 
            style={{ backgroundColor: "lightblue", height: 270, width: 210 }}
            onPress={() => router.push(`/singlemovie/${id}`)}
          >
            <Image
              source={{ uri: data.Poster}}
              resizeMode="contain"
              style={{ width: "100%", height: "70%"}}
            />
            <View style={{ gap: 10, paddingHorizontal: 3}}>
              <Text numberOfLines={1}>{data.Title}</Text>
              <View style={{ flexDirection: "row", gap: 6, alignContent: "center" }}>
                <Text>{data.Year}</Text>
                <Text style={{ height: 7, width: 7, backgroundColor: data.Rated !== "N/A" ? "black" : "none", borderRadius: 40, marginVertical: "auto"}}></Text>
                <Text>{data.Rated !== "N/A" ? data.Rated : ""}</Text>
              </View>
              <View style={{ height: 30, flexDirection: "row", alignContent: "center", gap: 5 }}>
                <Image 
                  source={icons.imdb}
                  resizeMode="cover"
                  style={{ height: "90%", width: "20%", display: ratingResult === "imdb" ? "inline" : "none"}}
                />
                <Image 
                  source={icons.fivestars}
                  resizeMode="cover"
                  style={{ height: "90%", width: "30%", display: ratingResult === false ? "inline" : "none"}}
                />
                <Image 
                  source={icons.tomato}
                  resizeMode="cover"
                  style={{ height: "70%", width: "10%", display: ratingResult === "tomato" ? "inline" : "none"}}
                />
                <Text style={{ marginTop: 4 }} >
                  {CheckRating(data.Ratings) ? 
                  data.Ratings[0].Value : 
                  "For rating, tap here"}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )
      }

    </>
  )
}

export default Individmovies
