import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native'
import { useState } from 'react'

import useFetch from '../../hook/useFetch'
import Individmovies from "../../components/RestOfPage/individmovie";
import Headerbuttons from "../../components/Header/headerbuttons";
import Plot from '../../components/Overview/plot'
import Writers from "../../components/Overview/writers";
import Boxoffice from "../../components/Overview/boxoffice";

import { icons } from '../../extras'
import Slidingbuttons from "../../components/Midpage/slidingbuttons";


const types = [
  {
    "Plot": 0
  }, {
    "Writers & Actors": 1
  }, {
    "Box Office $$" : 2
  }]


const Overview = () => {

  const [topic, setTopic] = useState("Plot")

  const router = useRouter()

  const params = useLocalSearchParams() // this is the id we use

  const { data, isLoading, error } = useFetch(params.id)


  const displayOverviewContent = () => {
    switch (topic) {
      case("Plot"):
        return (
          <>
            {isLoading ? 
              (<ActivityIndicator />) : 
            error ? 
              <Text>Something went wrong...</Text> : 
            <Plot plot={data.Plot}/>}
          </>
        )
      case("Writers & Actors"):
        return (
          <Writers />
        )
      case("Box Office $$"):
        return (
          <Boxoffice />
        )
    }
  }

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
          {displayOverviewContent()}
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Overview