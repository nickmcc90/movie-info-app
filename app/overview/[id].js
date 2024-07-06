import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import { useState } from 'react'

import useFetch from '../../hook/useFetch'
import Individmovies from "../../components/RestOfPage/individmovie";
import Headerbuttons from "../../components/Header/headerbuttons";

import { icons } from '../../extras'
import Slidingbuttons from "../../components/Midpage/slidingbuttons";


const types = [
  {
    "Plot": 0
  }, {
    "Writes & Actors": 1
  }, {
    "Box Office $$" : 2
  }]


const Overview = () => {

  const [topic, setTopic] = useState("Plot")

  const router = useRouter()

  const params = useLocalSearchParams() // this is the id we use



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "tan"}}>
      <Stack.Screen 
        options={{
          headerStyle: {backgroundColor: "tan"},
          headerShadowVisible: false,
          headerTitle: ""
        }}
      />

      <ScrollView>
        <Individmovies 
          id={params.id} idcall={true}
        />
        <View style={{ marginTop: 20, marginHorizontal: "auto"}}>
          <Slidingbuttons data={types} certainName={topic} setCertainName={setTopic}/>
        </View>

        <View>

        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Overview