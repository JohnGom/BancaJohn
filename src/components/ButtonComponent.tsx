import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComponent = ({btnName}) => {
  return (
    <TouchableOpacity>
      <Text>{btnName}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent