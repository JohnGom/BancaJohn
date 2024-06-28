import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

type Props = { 
  btnName: string,  
  handlePress: () => void 
}

const ButtonComponent = ({btnName, handlePress}: Props) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{btnName}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent