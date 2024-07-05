import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import Individmovies from './individmovie'


const MovieHorizontalScroll = ({ data }) => {

  const newData = data[0] // data is coming in as an array of an array for some reason.

  return (
      <FlatList 
        data={newData}
        renderItem={({ item }) => (
          <Individmovies id={item}/>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: 25 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
  )
}

export default MovieHorizontalScroll