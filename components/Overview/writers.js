import { Text, View } from 'react-native'

const Writers = ({ writers, actors }) => {
  return (
    <View style={{ gap: 5, marginTop: 15, marginHorizontal: "auto" }}>
      <View style={{ flexDirection: "row" }}>
        <Text>Actors : </Text>
        <Text>{actors}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Writers : </Text>
        <Text>{writers}</Text>
      </View>
    </View>
  )
}

export default Writers