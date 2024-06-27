import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Product } from '../model/product'

type Props = { 
    label: string, 
    value: string, 
    onChange: (text :string) => void 
}

const InputComponent = ({ label, value, onChange }: Props) => {
  return (
    <View>
        <Text>{label}</Text>
        <TextInput 
            style={styles.input} 
            value={value}
            onChangeText={(text) => onChange(text)}
        />
    </View>
  )
}

export default InputComponent

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderColor: "gray",
        borderWidth: 1,
      }
})