import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native'

import useFetch from '../../hook/useFetch'

const Header = ({ title }) => {

  if(title === "Action") {
    const { data } = useFetch("tt22022452");
  } elif (title === "Drama") {
    const { data } = useFetch("tt13433802");
  } elif (title === "Music") {
    const { data } = useFetch("tt32260498");
  } elif (title === "Horror") {
    const { data } = useFetch("tt22048412")
  }



  console.log(data);

  return (
    <Text style={{ fontSize: 30}}>{title}</Text>
  )
}

export default Header