import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import Individmovies from './individmovie'
import { useRouter } from 'expo-router'


const MovieHorizontalScroll = ({ data }) => {

  const newData = data[0] // data is coming in as an array of an array for some reason.

  const router = useRouter()

  return (
      <FlatList 
        data={newData}
        renderItem={({ item }) => (
          <Individmovies id={item} handleOverview={() => router.push(`/overview/${item}`)}/>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: 25 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
  )
}

export default MovieHorizontalScroll