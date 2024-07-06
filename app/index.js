import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { useState } from 'react'

import { icons, movies } from '../extras'



import Headerbuttons from '../components/Header/headerbuttons'
import Slidingbuttons from '../components/Midpage/slidingbuttons'
import Header from '../components/RestOfPage/header'
import MovieHorizontalScroll from '../components/RestOfPage/moviehorizontalscroll'


const App = () => {

  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "tan"}}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: "tan"},
          headerShadowVisible: false,
          headerLeft: () => (
            <Headerbuttons>{[icons.movie]}</Headerbuttons>
          ),
          headerRight: () => (
            <Headerbuttons dimension="90%">{[icons.search, icons.user]}</Headerbuttons>
          ),
          headerTitle: ""
        }}
      />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 45, paddingHorizontal: 10 }}
      >
        <View>
          <Slidingbuttons data={movies} />
        </View>

        <View style={{ rowGap: 30, marginTop: 30 }}>
          {movies.map((item, index) => (
            <View key={index} style={{ rowGap: 20 }}>
              <Header title={Object.keys(item)}/>
              <MovieHorizontalScroll data={Object.values(item)}/>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App


// Set up a page for movie overview
// Set up a page for scrolling though movies with a search term of title only