import { Text } from 'react-native'

const Boxoffice = ({ money }) => {
  return (
    <Text style={{ marginTop: 15, marginHorizontal: "auto" }}>
      {money}
    </Text>
  )
}

export default Boxoffice