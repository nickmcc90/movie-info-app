import { View, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { useState } from 'react'
import axios from 'axios'

import useFetch from '../../hook/useFetch'

import dismissKeyboard from 'react-native-dismiss-keyboard'

const SearchInput = ({ setGrabIds, setNotSearching }) => {

  const [ searchValue, setSearchValue ] = useState()

  const [ titleData, setTitleData ] = useState([])
  const [ titleError, setTitleError ] = useState(null)


  const fetchTitle = async (title) => {
    setNotSearching(true)

    const options = {
      method: 'GET',
      url: 'https://movie-database-alternative.p.rapidapi.com/',
      params: {
        s: `${title}`,
        r: 'json',
        page: '1'
      },
      headers: {
        'x-rapidapi-key': '060a357645msh4ff5a6e46e459c7p1a331ejsnd45a2729135a',
        'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
      }
    };



    try {
      const response = await axios.request(options)
      setTitleData(response.data.Search)
    } catch (error) {
      setTitleError(error)
    } finally {
      setNotSearching(false)
    }

    // Now time to get the imdbID number to useFetch...

    console.log(titleData)

    const ids = titleData.map((item, index) => {
      return item.imdbID
    })

    setGrabIds(ids)



  }





  return (
    <TextInput 
      style={{ backgroundColor: "white", width: 240, height: 35, borderRadius: 10, marginTop: 8, marginLeft: 5, padding: 10 }}
      onChangeText={(text) => {setSearchValue(text)}}
      value={searchValue}
      placeholder='Movie title...'
      autoCapitalize='sentences'
      autoCorrect={true}
      onKeyPress={(e) => {
        if(e.nativeEvent.key === "Enter") {
          fetchTitle(searchValue)
          dismissKeyboard();
        }
      }}
    >
      
    </TextInput>
  )
}

export default SearchInput