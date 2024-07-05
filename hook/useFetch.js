import axios from 'axios'
import { useState, useEffect } from 'react'

const [reuseableData, setReuseableData] = useState([])

function persistData() {

}

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
    if(localStorage.getItem(localKey)) {
      const reusableData = JSON.parse(localStorage.getItem(localKey))
      console.log("data grabbed from cache")
      setData(reusableData)
    } else {
        try {
          const response = await axios.request(options)
          localStorage.setItem(localKey, JSON.stringify(response.data))
          console.log("Data grabbed from API")
          setData(response.data)
        } catch (error) {
          setError(error)
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