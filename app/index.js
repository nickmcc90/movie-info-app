import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { useState } from 'react'

import { icons, movies } from '../extras'



import Headerbuttons from '../components/Header/headerbuttons'
import Slidingbuttons from '../components/Midpage/slidingbuttons'
import Header from '../components/RestOfPage/header'
import MovieHorizontalScroll from '../components/RestOfPage/moviehorizontalscroll'



const App = () => {

  const router = useRouter()

  const [genre, setGenre] = useState("")

  const displayGenreContent = () => {
    switch (genre) {
      case ("Action"):
        return (
          <View style={{ rowGap: 20 }}>
            <Header title={Object.keys(movies[0])}/>
            <MovieHorizontalScroll data={Object.values(movies[0])}/>
          </View>
        )
      case ("Drama"):
        return (
          <View style={{ rowGap: 20 }}>
            <Header title={Object.keys(movies[1])}/>
            <MovieHorizontalScroll data={Object.values(movies[1])}/>
          </View>
        )
      case ("Music"):
        return (
          <View style={{ rowGap: 20 }}>
            <Header title={Object.keys(movies[2])}/>
            <MovieHorizontalScroll data={Object.values(movies[2])}/>
          </View>
        )
      case ("Horror"):
        return (
          <View style={{ rowGap: 20 }}>
            <Header title={Object.keys(movies[3])}/>
            <MovieHorizontalScroll data={Object.values(movies[3])}/>
          </View>
        )
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "tan"}}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: "tan"},
          headerShadowVisible: false,
          headerLeft: () => (
            <Headerbuttons dimension="90%">{[icons.movie]}</Headerbuttons>
          ),
          headerRight: () => (
            <>
              <Headerbuttons dimension="90%" handleRoute={() => router.push(`search/find`)}>{[icons.search]}</Headerbuttons>
              <Headerbuttons dimension="80%">{[icons.user]}</Headerbuttons>
            </>
          ),
          headerTitle: ""
        }}
      />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 45, paddingHorizontal: 10, paddingBottom: 35 }}
      >
        <View>
          <Slidingbuttons data={movies} certainName={genre} setCertainName={setGenre}/>
        </View>

        <View style={{ rowGap: 30, marginTop: 30 }}>
          {genre === "" ? 
          (  movies.map((item, index) => (
              <View key={index} style={{ rowGap: 20 }}>
                <Header title={Object.keys(item)}/>
                <MovieHorizontalScroll data={Object.values(item)}/>
              </View>
          )) ) : ""}

          {displayGenreContent()}

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App


// Set up a page for movie overview
// Set up a page for scrolling though movies with a search term of title only


// Need to do switching tab functionality with movie overview page. DONE
// Add the fonts to _layout like you saw. DONE
// Then on to search DONE
// FIGURE OUT ID TRANSFER FROM FIND.JS TO INDIVIDMOVIES DONE
// Then favorites

// bugs to work on...
/* 

1. Have to press the search button twice to get a result.
2. Want to add authentication to it.
3. Want to add favorites to enable with autentication.

*/
