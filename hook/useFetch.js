import axios from 'axios'
import { useState, useEffect } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'


const useFetch = (id) => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: 'https://movie-database-alternative.p.rapidapi.com/',
    params: {
      r: 'json',
      i: id
    },
    headers: {
      'x-rapidapi-key': '060a357645msh4ff5a6e46e459c7p1a331ejsnd45a2729135a',
      'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
    }
  };

  const fetchdata = async () => {
    setIsLoading(true)

    const localKey = `MOVIE-${id}`

    let reusable;

    try {
      reusable = await AsyncStorage.getItem(localKey)
      reusable = JSON.parse(reusable)
      console.log("Gottem")
    } catch {
      reusable = false
    }

    if(reusable) {
      console.log("Grabbed from cache")
      setData(reusable)
      setIsLoading(false)
    } else {
        try {
          const response = await axios.request(options)
          AsyncStorage.setItem(localKey, JSON.stringify(response.data))
          console.log("Grabbed from API")
          setData(response.data)
        } catch (error) {
          setError(error)
          console.log(error)
        } finally {
          setIsLoading(false)
        }
    }
  }

  useEffect(() => {
    fetchdata();
  }, [])

  return (
    { data, isLoading, error }
  )
}

export default useFetch