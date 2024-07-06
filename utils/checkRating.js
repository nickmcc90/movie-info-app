const CheckRating = (ratingArray) => {

  const bool = Array.isArray(ratingArray)

  if(bool && ratingArray[0] && ratingArray[0].Value) {
    
    const string = ratingArray[0].Value

    if(string.includes("%")) {
      return "tomato"
    } else {
      return "imdb"
    }

  } else {
    return false
  }


}

export default CheckRating


// If the rating exists, we check if there is a percentage sign in the rating. If so, then it is a rotten tomatos rating.