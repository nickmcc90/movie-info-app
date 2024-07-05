import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native'

const Slidingbuttons = ({ data }) => {
  return (
    <FlatList 
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ backgroundColor: "black", padding: 5, paddingHorizontal: 15, borderRadius: 5}}>
          <Text style={{ color: "white"}}>{Object.keys(item)}</Text>
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