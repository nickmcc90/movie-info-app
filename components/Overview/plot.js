import { Text, View } from 'react-native'

const Plot = ({ plot }) => {


  return (
    <View style={{ marginTop: 15, marginHorizontal: "auto" }}>
      <Text>{plot}</Text>
    </View>
  )
}

export default Plot