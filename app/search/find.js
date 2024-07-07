import { View, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image, SectionList, RefreshControl } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { useState, useEffect, useCallback } from 'react'

import { icons, movies } from '../../extras'
import SearchInput from '../../components/Header/searchinput'
import Headerbuttons from '../../components/Header/headerbuttons'
import Individmovies from '../../components/RestOfPage/individmovie'

const Find = () => {


  const [ notSearching, setNotSearching ] = useState(true)
  const [ grabIds, setGrabIds ] = useState([])


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
              <SearchInput setNotSearching={setNotSearching} setGrabIds={setGrabIds} />
            </View>
          ),
          headerRight: () => (
            <Headerbuttons dimension="80%">{[icons.user]}</Headerbuttons>
          )
        }}
      />

      <View 
        style={{ flex: 1, marginTop: 45, paddingHorizontal: 10, paddingBottom: 35, marginHorizontal: "auto" }}
      >
        { notSearching ? 
            <Text>Try searching for a movie title... You may have to press search twice if nothing happens.</Text> : 
          !grabIds ? <Text>Sorry... please press search again.</Text> : 
            <>
              <FlatList 
              data={grabIds}
              renderItem={(id) => (
                <Individmovies id={id.item} handleOverview={() => router.push(`overview/${id.item}`)}/>
              )}
              keyExtractor={id => id}
              contentContainerStyle={{ rowGap: 20 }}
              showsVerticalScrollIndicator={false}
              vertical
              />
            </>
        }
      </View>

    </SafeAreaView>
  )
}

export default Find