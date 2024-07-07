import { View, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { useState } from 'react'

import { icons, movies } from '../../extras'
import SearchInput from '../../components/Header/searchinput'
import Headerbuttons from '../../components/Header/headerbuttons'
import Individmovies from '../../components/RestOfPage/individmovie'

const Find = () => {

  const [ notSearching, setNotSearching ] = useState(true)

  const [ grabIds, setGrabIds ] = useState()

  console.log(grabIds)

  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "tan" }}>
      <Stack.Screen 
        options={{
          headerStyle: { backgroundColor: "tan" },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignContent: "center" }}>
              <Headerbuttons dimension="90%" handleRoute={() => router.back()}>{[icons.left]}</Headerbuttons>
              <SearchInput setNotSearching={setNotSearching} setGrabIds={setGrabIds}/>
            </View>
          ),
          headerRight: () => (
            <Headerbuttons dimension="80%">{[icons.user]}</Headerbuttons>
          )
        }}
      />

      <ScrollView
       style={{ flex: 1, marginTop: 45, paddingHorizontal: 10, paddingBottom: 35, marginHorizontal: "auto" }}
       showsVerticalScrollIndicator={false}
      >
        { notSearching ? 
            <Text>Try searching for a movie title.</Text> : 
          <FlatList 
            data={grabIds}
            renderItem={({ id }) => (
              <Individmovies id={id}/>
            )}
            keyExtractor={item => item}
          />
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Find