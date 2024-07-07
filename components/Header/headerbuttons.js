import { Image, TouchableOpacity, View, Text } from 'react-native'

import { icons } from "../../extras"

const Headerbuttons = ({ children, dimension, handleRoute }) => {

  return (
    <View style={{ flexDirection: "row", height: 50, gap: 10, paddingHorizontal: 2, marginTop: 4 }}>
      {children.map((item) => (
        <TouchableOpacity 
          style={{ height: "100%", width: 50, backgroundColor: "transparent", borderRadius: 10}}
          onPress={handleRoute}
        >
          <Image 
            source={item}
            resizeMode="contain"
            style={{ height: dimension ? dimension : "100%", width: "100%"}}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Headerbuttons