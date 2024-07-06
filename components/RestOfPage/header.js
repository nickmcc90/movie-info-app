import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native'

import useFetch from '../../hook/useFetch'

const Header = ({ title }) => {


  return (
    <Text style={{ fontSize: 30}}>{title}</Text>
  )
}

export default Header