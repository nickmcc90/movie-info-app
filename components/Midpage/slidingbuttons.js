import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native'

const Slidingbuttons = ({ data, certainName, setCertainName }) => {
  return (
    <FlatList 
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity 
          style={{ backgroundColor: certainName === Object.keys(item)[0] ? "white" : "black", padding: 5, paddingHorizontal: 15, borderRadius: 5}}
          onPress={() => certainName === Object.keys(item)[0] ? setCertainName("") : setCertainName(Object.keys(item)[0])}
        >
          <Text style={{ color: certainName === Object.keys(item)[0] ? "black" : "white"}}>{Object.keys(item)[0]}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={item => Object.keys(item)}
      contentContainerStyle={{ columnGap: 15 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default Slidingbuttons